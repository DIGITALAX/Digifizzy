import React from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page2728.module.scss'

const Page2728 = () => (
  <div className={styles.wrapper}>
    <div className={styles.background1}></div>
    <div className={styles.image1}>
      <Image
        src={`${DIGIFIZZY_S3}/11/images/2728_image1.png`}
        width={960}
        height={1497}
      />
    </div>
    <div className={styles.image2}>
      <Image
        src={`${DIGIFIZZY_S3}/11/images/2728_image2.png`}
        width={960}
        height={320}
      />
    </div>
    <div className={styles.image3}>
      <Image
        src={`${DIGIFIZZY_S3}/11/images/2728_image3.png`}
        width={960}
        height={320}
      />
    </div>
    <a href='https://twitter.com/superbloxNFT' target='_blank'>
      <div className={styles.image4}>
        <Image
          src={`${DIGIFIZZY_S3}/11/images/2728_image4.png`}
          width={1045}
          height={387}
        />
      </div>
    </a>
    <a href='https://twitter.com/toady_hawk' target='_blank'>
      <div className={styles.image5}>
        <Image
          src={`${DIGIFIZZY_S3}/11/images/2728_image5.png`}
          width={128}
          height={128}
        />
      </div>
    </a>

    <a href='https://twitter.com/NounPunks' target='_blank'>
      <div className={styles.text1}>
        NounPunks
      </div>
    </a>
    <div className={styles.text2}>
      CC0 3D NFTS + M0RE. TUNE <br />
      IN FOR A CONVERSATION WITH PROJECT TEAM MEMBER TOADY HAWK      
    </div>
    <a href='https://twitter.com/arpeggi_labs' target='_blank'>
      <div className={styles.text3}>
        Arpeggi Studio
      </div>
    </a>
  </div>
)

export default Page2728
