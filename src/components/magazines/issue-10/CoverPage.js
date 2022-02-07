import React from 'react'
import Image from 'next/image'
import styles from './coverpage.module.scss'

const CoverPage = () => (
  <div className={styles.wrapper}>
    <div className={styles.imageBackground}>
      <Image
        src='/magazine/9/images/frontcover_background.jpg'
        width={960}
        height={1497}
      />
    </div>
    <div className={styles.image1}>
      <Image
        src='/magazine/9/images/frontcover_image1.png'
        width={267}
        height={344}
      />
    </div>

    <div className={styles.text1}>
      Open Pose Galleries for the New Runway 
    </div>
    <div className={styles.text2}>
      NYC Indie Fashion Boutiques
    </div>
    <div className={styles.text3}>
      Arcade & NFT Lending
    </div>
    <div className={styles.text4}>
      Open Source Avatars
    </div>
    <div className={styles.text5}>
      Realm runway #! nyc
    </div>
    <div className={styles.text6}>
      ZK ROLLUPSL2
    </div>
    <div className={styles.text7}>
      Audio Visual Experiences with No Fun Studios
    </div>
    <div className={styles.text8}>
      The Infinite Runway, Models & Kinesthetics
    </div>
    <div className={styles.text9}>
      DIGIFIZZY
    </div>
    <div className={styles.text10}>
      DIGIFIZZY
    </div>
    <div className={styles.text11}>
      DIGIFIZZY
    </div>
    <div className={styles.text12}>
      Issue Nine
    </div>
    <div className={styles.text13}>
      Issue Nine
    </div>
  </div>
)

export default CoverPage
