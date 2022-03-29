import React from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page4950.module.scss'

const Page4950 = () => (
  <div className={styles.wrapper}>
    <div className={styles.imageBackground}>
      <Image
        src={`${DIGIFIZZY_S3}/11/images/4950_background.jpg`}
        width={1920}
        height={1497}
      />
    </div>
    <div className={styles.rect1}></div>
    
    <a
      className={styles.text1}
      href='https://twitter.com/stellabelle'
      target='_blank'
    >
      stellabelle
    </a>
    <a
      className={styles.text2}
      href='https://twitter.com/stellabelle'
      target='_blank'
    >
      stellabelle
    </a>    
    <a
      className={styles.text3}
      href='https://twitter.com/stellabelle'
      target='_blank'
    >
      stellabelle
    </a>
    <a
      className={styles.text4}
      href='https://twitter.com/stellabelle'
      target='_blank'
    >
      stellabelle
    </a>
    <a
      className={styles.text5}
      href='https://twitter.com/stellabelle'
      target='_blank'
    >
      stellabelle
    </a>
    <a
      className={styles.text6}
      href='https://twitter.com/stellabelle'
      target='_blank'
    >
      stellabelle
    </a>
    <div className={styles.text7}>
      On a Friday afternoon call with Stellabelle I met a fellow cypherpunk CC0 pirate, someone that truly understands the power of cryptoart and NFTs as an OG artist, writer and metaverse architect since 2017. It’s not often that you meet an artist that truly understands and lives their principles, way more common these days to find people that like to posture and pretend that they have a clue what web3 is, refreshing having a free wheeling conversation with a real one. 
      <br /><br />
      Among the most salient things that we spoke about is the ongoing attempts at corporate takeover running rampant through the scene, from BAKYC, to yuppy wannabe CryptoPunks to almost every P2E metaverse “game” currently live on the market. There is so much work to be done to raise the flag of real cypherpunk web3 cc0 artistry against whatever the fuck Randy Zuckerbergs of the world think that they are doing in their cringe-seizure inducing dance videos. 
      <br /><br />
      All of Stellabelle’s collections are in the public domain and she continues to provide generously to the space with ongoing events, activations and calling out of the fakes that fill our feeds.       
    </div>    
    <a
      className={styles.text8}
      href='https://www.cryptovoxels.com/play?coords=S@6682W,105S,5F'
      target='_blank'
    >
      METAVERSE GALLERY
    </a>
    <a
      className={styles.text9}
      href='https://www.cryptovoxels.com/play?coords=S@6682W,105S,5F'
      target='_blank'
    >
      METAVERSE GALLERY
    </a>
    <a
      className={styles.text10}
      href='https://www.cryptovoxels.com/play?coords=S@6682W,105S,5F'
      target='_blank'
    >
      METAVERSE GALLERY
    </a>

    <div className={styles.image1}>
      <Image
        src={`${DIGIFIZZY_S3}/11/images/4950_image1.gif`}
        width={1200}
        height={818}
      />
    </div>

    <video muted loop autoPlay className={styles.video1}>
      <source
        src={`${DIGIFIZZY_S3}/11/videos/4950_video1.mp4`}
        type='video/mp4'
      />
    </video>

  </div>
)

export default Page4950
