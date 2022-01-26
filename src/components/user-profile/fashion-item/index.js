import React, { useState } from 'react'
import LazyLoad from 'react-lazyload'
import axios from 'axios'
import {
  DIGITAL_CHANGING_ROOM,
  DIGIFIZZY_BUNDLES,
  DRIP_IDL,
  GENESIS_MONA_NFT,
  LOOK_FASHION_LOOT,
  PODE,
  GDN_MEMBERSHIP_NFT
} from '@constants/nft_categories'
import styles from './styles.module.scss'

const FashionItem = (props) => {
  const {
    className,
    animation,
    type,
    image,
    tokenURI,
    onClickViewFashion,
    category
  } = props
  const [imageUrl, setImageUrl] = useState(null)
  const [isVideo, setIsVideo] = useState(false)

  if ((!image || image == '') && (!animation || animation == '') && tokenURI && tokenURI != '') {
    axios.get(tokenURI).then((tokenData) => {
      const { data } = tokenData
      setImageUrl(data.image_url)

      const tester = new Image()
      tester.onerror = () => setIsVideo(true)
      tester.src = data.image_url
    })
  }
  return (
    <div className={[styles.wrapper, className].join(' ')}>
      {
        animation && animation != ''
          ? (
            <LazyLoad style={{
              width: '100%',
              height: '100%'
            }}
            >
              <video autoPlay muted loop className={styles.videoItem}>
                <source src={animation} type='video/mp4' />
              </video>
            </LazyLoad>
          )
          : (
            image && image != ''
              ? (
                <LazyLoad style={{
                  width: '100%',
                  height: '100%'
                }}
                >
                  <img src={image} className={styles.photoItem} />
                </LazyLoad>
              )
              : <div />
          )
      }
      {
        imageUrl && (isVideo
          ? (
            <video autoPlay muted loop className={styles.videoItem}>
              <source src={imageUrl} type='video/mp4' />
            </video>
          )
          : <img src={imageUrl} className={styles.photoItem} />
        )
      }
      {
        (category == DIGITAL_CHANGING_ROOM
        || category == DRIP_IDL)
        && (
          <button
            className={[styles.viewFashion].join(' ')}
            onClick={onClickViewFashion}
          >
            <img src='/images/metaverse/gray_button.png' />
            <div>VIEW FASHION</div>
          </button>
        )
      }
      {
        (category === DIGIFIZZY_BUNDLES)
        && (
          <button
            className={[styles.viewFashion].join(' ')}
            onClick={onClickViewFashion}
          >
            <img src='/images/metaverse/gray_button.png' />
            <div>
              {type === 'digitalaxSubscriptionsPolygon' ? 'UNLOCK' : 'VIEW BUNDLE'}
            </div>
          </button>
        )
      }
    </div>
  )
}

export default FashionItem
