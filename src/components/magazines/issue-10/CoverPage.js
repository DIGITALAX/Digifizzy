import React from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './coverpage.module.scss'

const CoverPage = () => (
  <div className={styles.wrapper}>
    <div className={styles.imageBackground}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/frontcover_background.png`}
        width={960}
        height={1497}
      />
    </div>
    <div className={styles.image1}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/frontcover_image1.png`}
        width={496}
        height={368}
      />
    </div>
    <div className={styles.image2}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/frontcover_image1.png`}
        width={496}
        height={368}
      />
    </div>
    <div className={styles.image3}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/frontcover_image1.png`}
        width={496}
        height={368}
      />
    </div>
    <div className={styles.image4}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/frontcover_image1.png`}
        width={496}
        height={368}
      />
    </div>
    <div className={styles.image5}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/frontcover_image1.png`}
        width={496}
        height={368}
      />
    </div>
    <div className={styles.image6}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/frontcover_image1.png`}
        width={496}
        height={368}
      />
    </div>
    <div className={styles.image7}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/frontcover_image1.png`}
        width={496}
        height={368}
      />
    </div>
    <div className={styles.imageIssueNo}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/frontcover_issueNo.png`}
        width={239}
        height={250}
      />
    </div>
    <div className={styles.text1Shadow}>
      The Great Game to Change the Game: A New Model
    </div>

    <div className={styles.text1}>
      The Great Game to Change the Game: A New Model
    </div>
    <div className={styles.text2}>
      Astro Aggy & Creative Empowerment
    </div>
    <div className={styles.text3}>
      CRYPTO <br /><br />IN
    </div>
    <div className={styles.text4}>
      COLUMB I A
    </div>
    <div className={styles.text5}>
      shared orderbooks + liquidity for better understanding cc0.
    </div>
    <div className={styles.text6Shadow}>
      Models of the Realms. Runway Launch.
    </div>
    <div className={styles.text6}>
      Models of the Realms. Runway Launch.
    </div>
    <div className={styles.text7}>
      micah’s universe.
    </div>
    <div className={styles.text8}>
      Physical Spaces & Assets with Immersive Experiences.
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
      Issue Ten
    </div>
    <div className={styles.text13}>
      Issue Ten
    </div>
  </div>
)

export default CoverPage
