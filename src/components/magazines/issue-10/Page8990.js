import React from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page8990.module.scss'

const Page8990 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageBackground}>
        <Image
          src={`${DIGIFIZZY_S3}/10/images/8990_background.jpg`}
          width={960}
          height={1497}
        />
      </div>
      <div className={styles.text5}>
        WHAT ARE YOU WEARING?
      </div>
      <div className={styles.text6}>
        WHAT ARE YOU WEARING?
      </div>
      <div className={styles.text7}>
        WHAT ARE YOU WEARING?
      </div>
      <div className={styles.text8}>
        WHAT ARE YOU WEARING?
      </div>
      <div className={styles.text9}>
        WHAT ARE YOU WEARING?
      </div>
      <div className={styles.rect1}></div>
      <div className={styles.text10}>
        FASHION FOR THE METAVERSE
      </div>

      <div className={styles.circle1}></div>
      <div className={styles.circle2}></div>
      <div className={styles.circle3}></div>

      <a
        className={styles.link1}
        href='https://www.realmrunway.xyz/'
        target='_blank'
      >
        <div className={styles.text1}>
          Realm Runway
        </div>
        <div className={styles.text3}>
          Realm Runway
        </div>
        
      </a>
      <a
        className={styles.link2}
        href='https://www.realmrunway.xyz/'
        target='_blank'
      >
        <div className={styles.text2}>
          Realm Runway
        </div>
        <div className={styles.text4}>
          Realm Runway
        </div>
      </a>

      <div className={styles.text11}>
        This month the first realm runway event was hosted by the gdn + gms during nyfw and was a huge success!
      </div>

      <video muted loop autoPlay className={[styles.video1, styles.gradient].join(' ')}>
        <source
          src={`${DIGIFIZZY_S3}/10/videos/8990_video1.mp4`}
          type='video/mp4'
        />
      </video>
      <video muted loop autoPlay className={[styles.video2, styles.gradient].join(' ')}>
        <source
          src={`${DIGIFIZZY_S3}/10/videos/8990_video2.mp4`}
          type='video/mp4'
        />
      </video>
      <video muted loop autoPlay className={[styles.video3, styles.gradient].join(' ')}>
        <source
          src={`${DIGIFIZZY_S3}/10/videos/8990_video3.mp4`}
          type='video/mp4'
        />
      </video>
      <video muted loop autoPlay className={[styles.video4, styles.gradient].join(' ')}>
        <source
          src={`${DIGIFIZZY_S3}/10/videos/8990_video4.mp4`}
          type='video/mp4'
        />
      </video>
      <video muted loop autoPlay className={[styles.video5, styles.gradient].join(' ')}>
        <source
          src={`${DIGIFIZZY_S3}/10/videos/8990_video5.mp4`}
          type='video/mp4'
        />
      </video>
      <video muted loop autoPlay className={[styles.video6, styles.gradient].join(' ')}>
        <source
          src={`${DIGIFIZZY_S3}/10/videos/8990_video6.mp4`}
          type='video/mp4'
        />
      </video>
    </div>
  )
}

export default Page8990
