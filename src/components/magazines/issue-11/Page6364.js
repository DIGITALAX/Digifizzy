import React from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page6364.module.scss'

const Page6364 = () => (
  <div className={styles.wrapper}>
    <div className={styles.background}>
      <Image 
        src={`${DIGIFIZZY_S3}/10/images/6364_background.jpg`}
        width={1920}
        height={1497}
      />
    </div>

    <div className={styles.rect1}></div>
    <div className={styles.rect2}></div>
    <div className={styles.rect3}></div>
    <div className={styles.rect4}></div>
    <div className={styles.rect5}></div>

    <div className={[styles.image1, styles.gradient].join(' ')}>
      <Image 
        src={`${DIGIFIZZY_S3}/10/images/6364_image1.jpg`}
        width={337}
        height={506}
      />
    </div>
    <div className={[styles.image2, styles.gradient].join(' ')}>
      <Image 
        src={`${DIGIFIZZY_S3}/10/images/6364_image2.jpg`}
        width={348}
        height={345}
      />
    </div>
    <div className={[styles.image3, styles.gradient].join(' ')}>
      <Image 
        src={`${DIGIFIZZY_S3}/10/images/6364_image3.jpg`}
        width={337}
        height={337}
      />
    </div>
    <div className={[styles.image4, styles.gradient].join(' ')}>
      <Image 
        src={`${DIGIFIZZY_S3}/10/images/6364_image4.jpg`}
        width={348}
        height={342}
      />
    </div>
    <div className={[styles.image5, styles.gradient].join(' ')}>
      <Image 
        src={`${DIGIFIZZY_S3}/10/images/6364_image5.jpg`}
        width={409}
        height={409}
      />
    </div>
    <div className={[styles.image6, styles.gradient].join(' ')}>
      <Image 
        src={`${DIGIFIZZY_S3}/10/images/6364_image6.jpg`}
        width={436}
        height={291}
      />
    </div>
    <div className={[styles.image7, styles.gradient].join(' ')}>
      <Image 
        src={`${DIGIFIZZY_S3}/10/images/6364_image7.jpg`}
        width={304}
        height={304}
      />
    </div>
    <div className={[styles.image8, styles.gradient].join(' ')}>
      <Image 
        src={`${DIGIFIZZY_S3}/10/images/6364_image8.jpg`}
        width={249}
        height={249}
      />
    </div>
    <div className={[styles.image9, styles.gradient].join(' ')}>
      <Image 
        src={`${DIGIFIZZY_S3}/10/images/6364_image9.jpg`}
        width={402}
        height={604}
      />
    </div>
    <div className={[styles.image10, styles.gradient].join(' ')}>
      <Image 
        src={`${DIGIFIZZY_S3}/10/images/6364_image10.jpg`}
        width={371}
        height={495}
      />
    </div>
    <div className={[styles.image11, styles.gradient].join(' ')}>
      <Image 
        src={`${DIGIFIZZY_S3}/10/images/6364_image11.jpg`}
        width={260}
        height={304}
      />
    </div>
    <div className={[styles.image12, styles.gradient].join(' ')}>
      <Image 
        src={`${DIGIFIZZY_S3}/10/images/6364_image12.jpg`}
        width={329}
        height={329}
      />
    </div>
    <div className={[styles.image13, styles.gradient].join(' ')}>
      <Image 
        src={`${DIGIFIZZY_S3}/10/images/6364_image13.jpg`}
        width={284}
        height={381}
      />
    </div>
    <div className={[styles.image14, styles.gradient].join(' ')}>
      <Image 
        src={`${DIGIFIZZY_S3}/10/images/6364_image14.jpg`}
        width={198}
        height={198}
      />
    </div>

    <iframe
      className={styles.video1}
      src='https://www.youtube.com/embed/U7gHleSG9OA?autoplay=1&mute=1&controls=0&loop=1'
      frameBorder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
    />

    <div className={styles.text1}>
      A new digital form takes Medellín for the first time
    </div>

  </div>
)

export default Page6364
