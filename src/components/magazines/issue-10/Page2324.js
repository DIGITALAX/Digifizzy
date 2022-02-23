import React from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page2324.module.scss'

const Page2324 = () => (
  <div className={styles.wrapper}>    
    <div className={styles.imageBackground}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/2324_background.jpg`}
        width={910}
        height={1497}
      />
    </div>

    <div className={styles.image1}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/2324_image1.jpg`}
        width={1016}
        height={1497}
      />
    </div>
    <div className={styles.image2}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/2324_image2.png`}
        width={327}
        height={314}
      />
    </div>
    <div className={styles.image3}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/2324_image2.png`}
        width={327}
        height={314}
      />
    </div>
    <div className={styles.image4}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/2324_image2.png`}
        width={327}
        height={314}
      />
    </div>
    <div className={styles.image5}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/2324_image2.png`}
        width={327}
        height={314}
      />
    </div>
    <div className={styles.image6}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/2324_image2.png`}
        width={327}
        height={314}
      />
    </div>

    <div className={styles.text1}>
      The Web3 Flywheel
    </div>
    <div className={styles.text2}>
      The Web3 Flywheel
    </div>
    <div className={styles.text3}>
      The Web3 Flywheel
    </div>
    <div className={styles.text4}>
      Rev. O. Lution
    </div>
  </div>
)

export default Page2324
