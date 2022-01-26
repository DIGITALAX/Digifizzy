import React from 'react'
import Image from 'next/image'
import { reviseUrl } from '@utils/helpers'
import styles from './styles.module.scss'

const AvatarElementalCard = props => {
  const {
    name,
    minter,
    image,
    type,
    gender,
    style,
    element,
    tokenUri,
    sourceFileExt,
    sourceFileType,
    renderedFileExt
  } = props

  const isVideoFile = renderedFileExt.toLowerCase() == 'mp4' ||
   renderedFileExt.toLowerCase() == 'avi'

  const downloadFile = async () => {
    console.log('tokenUri: ', tokenUri)

    const tokenRes = await fetch(tokenUri)
    console.log('--- item tokenRes: ', tokenRes)

    const rdata = await tokenRes.json()
    console.log('-- rdata: ', rdata)

    const response = await fetch(rdata['3D_File'], {
      'Content-Type': sourceFileType == '' ? 'multipart/form-data' : sourceFileType,
      mode: 'cors' // 'cors' by default
    })

    const content = await response.blob()

    console.log('response: ', content)

    // Create blob link to download
    const url = URL.createObjectURL(content)

    console.log('url: ', url)
    const link = document.createElement('a')
    link.href = url
    link.setAttribute(
      'download',
      `3DFile${sourceFileExt == '' ? '' : '.'}${sourceFileExt}`
    )

    // Append to html link element page
    document.body.appendChild(link)

    // Start download
    link.click()

    // Clean up and remove the link
    link.parentNode.removeChild(link)
    
  }  

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.imageWrapper}>
        {
          !isVideoFile &&
          <Image 
            src={reviseUrl(image)}
            width='1000'
            height='1000'
          />
        }
        {
          isVideoFile && 
          <video 
            autoPlay muted loop playsInline
          >
            <source
              src={reviseUrl(image)}
              type='video/mp4'
            />
          </video>
        }
      </div>
      <div className={styles.name}>
        { name }
      </div>

      <div className={styles.details}>
        <div className={styles.attribute}>
          MODEL: {minter}
        </div>
        <div className={styles.attribute}>
          TYPE: {type}
        </div>
        <div className={styles.attribute}>
          GENDER: {gender}
        </div>
        <div className={styles.attribute}>
          STYLE: {style}
        </div>
        <div className={styles.attribute}>
          ELEMENT: {element}
        </div>
        <div className={styles.download} onClick={downloadFile}>
          <Image
            src='/magazine/9/images/download.png'
            width={42}
            height={42}
          />
        </div>
      </div>
    </div>
  )
}

export default AvatarElementalCard