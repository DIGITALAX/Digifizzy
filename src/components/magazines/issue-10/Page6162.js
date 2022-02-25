import React from 'react'
import { DIGIFIZZY_S3 } from '@constants/urls'
import Image from 'next/image'
import styles from './page6162.module.scss'

const Page6162 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.rect1}></div>
      <video autoPlay muted loop className={styles.video1}>
        <source src='./magazine/1/videos/moshed-05-02-1-15-28.mp4' type='video/mp4' />
      </video>
      <div className={styles.image1}>
        <Image 
          src={`${DIGIFIZZY_S3}/10/images/6162_image3.png`}
          width={262}
          height={1640}
        />
      </div>
      <div className={styles.text1}>COLUMBIA</div>
      <div className={styles.text2}> INTERNATIONAL PLAYERS</div>
      <div className={styles.image2}>
        <Image
          src={`${DIGIFIZZY_S3}/10/images/6162_background.jpg`}
          width={960}
          height={1497}
        />
      </div>
      <div className={styles.image3}>
        <Image
          src={`${DIGIFIZZY_S3}/10/images/6162_image1.png`}
          width={881}
          height={995}
        />
      </div>


      <div className={styles.rect2}></div>
      <div className={styles.rect3}></div>
      <div className={styles.rect4}></div>
      <div className={styles.image4}>
        <Image
          src={`${DIGIFIZZY_S3}/10/images/6162_image2.gif`}
          width={393}
          height={267}
        />
      </div>
      <a
        className={styles.text3}
        href='https://kathiuska.com'
        target='_blank'
      >
        Catalina Vasquez
      </a>
      <div className={styles.text4}>
        Catalina is an digital artist and IRL fashion designer from Medellín, Columbia. She is one of the most diverse creators that I have had the pleasure of speaking with throughout the life of DIGIFIZZY. 
        <br /><br />
        She mixes vibrant colors, geometric art, psychodelic influences, memetic anime styles, classically Latin American children’s book aesthetics and derivations from many other forms. 
        <br /><br />
        It’s hard not to get lost in the detalied worlds and cities that she draws out into common space from the depths of rare imaginations. 
      </div>
      <div className={styles.text5}>
        Catalina has been in the NFT space for quite sometime, releasing various collections and building a dedicated buyer and collector base that is closely following her journey in web3. 
        <br /><br />
        As far as the community in Columbia, although much of the art scene is still in its exploratory phase with NFTs, much of the community is curious and hungry as to how this new technology can positively disrupt so much of the barriers and hurdles faced by those trying to make their art their full time vehicle both for human interaction and sustainable livelihood. 
        <br /><br />
        Bogotá’s arts community is currently building institutions to support artists and reduce the trade offs that are ultimately necessary for every creator today. 
        <br /><br />
        NFTs offer the most direct and reliable ways to expand markets far beyond the locations where you are born or raised. 
        <br /><br />
        And yet, to better express, package and remix the traditions that have most influenced you into new stories that appeal to that expanded collector base. This is all to real for Catalina who has consistently put herself on the vanguard of the Columbian NFT artist and fashion scene. 
        <br /><br />
        We can’t wait to continue to follow her journey, and check out the zine murals on the next pages featuring collections of her art, fashion and bold self portraiture!
      </div>

    </div>
  )
}

export default Page6162
