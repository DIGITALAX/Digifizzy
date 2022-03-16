import React from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page9192.module.scss'

const Page9192 = () => (
  <div className={styles.wrapper}>
    <div className={styles.rect1}></div>
    <div className={styles.image1}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/9192_image1.png`}
        width={486}
        height={1497}
      />
    </div>
    <div className={styles.image2}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/9192_image2.png`}
        width={89}
        height={1497}
      />
    </div>
    <div className={[styles.image3, styles.gradient].join(' ')}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/9192_image3.jpg`}
        width={461}
        height={504}
      />
    </div>
    <div className={[styles.image4, styles.gradient].join(' ')}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/9192_image4.jpg`}
        width={504}
        height={451}
      />
    </div>
    <div className={[styles.image5, styles.gradient].join(' ')}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/9192_image5.jpg`}
        width={277}
        height={369}
      />
    </div>
    <div className={[styles.image6, styles.gradient].join(' ')}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/9192_image6.jpg`}
        width={400}
        height={300}
      />
    </div>
    <div className={[styles.image7, styles.gradient].join(' ')}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/9192_image7.jpg`}
        width={338}
        height={619}
      />
    </div>
    <div className={[styles.image9, styles.gradient].join(' ')}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/9192_image9.jpg`}
        width={556}
        height={417}
      />
    </div>
    <div className={[styles.image8, styles.gradient].join(' ')}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/9192_image8.jpg`}
        width={339}
        height={309}
      />
    </div>
    <div className={[styles.image10, styles.gradient].join(' ')}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/9192_image10.jpg`}
        width={440}
        height={330}
      />
    </div>
    <div className={[styles.image11, styles.gradient].join(' ')}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/9192_image11.jpg`}
        width={339}
        height={433}
      />
    </div>
    <div className={[styles.image12, styles.gradient].join(' ')}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/9192_image12.jpg`}
        width={428}
        height={321}
      />
    </div>
    <div className={[styles.image13, styles.gradient].join(' ')}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/9192_image13.jpg`}
        width={227}
        height={302}
      />
    </div>
    <div className={[styles.image14, styles.gradient].join(' ')}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/9192_image14.jpg`}
        width={343}
        height={257}
      />
    </div>
    <div className={[styles.image15, styles.gradient].join(' ')}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/9192_image15.jpg`}
        width={471}
        height={353}
      />
    </div>
    <iframe
        className={styles.video1}
        src='https://www.youtube.com/embed/CIhAGtfoWV0?autoplay=1&mute=1&controls=0&loop=1'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      />

  </div>
)

export default Page9192
