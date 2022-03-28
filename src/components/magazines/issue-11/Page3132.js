import React from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page3132.module.scss'

const Page3132 = () => (
  <div className={styles.wrapper}>
    <div className={styles.rect1}></div>
    <div className={styles.rect2}></div>
    <div className={styles.rect3}></div>
    <div className={styles.rect4}></div>
    <div className={styles.rect5}></div>
    <div className={styles.rect6}></div>
    <div className={styles.rect7}></div>
    <div className={styles.text1}>
      Crypto Art 
    </div>
    <div className={styles.text2}>
      Hall of 
    </div>
    <div className={styles.text3}>
      Fame
    </div>

    <div className={styles.line1}></div>
    <div className={styles.line2}></div>
    <div className={styles.line3}></div>
    <div className={styles.line4}></div>
    <div className={styles.line5}></div>

    <div
      className={styles.imagePath1}
    >
      <Image
        src='/magazine/9/images/3132_path.png'
        width={1068}
        height={957}
      />
    </div>

    <div
      className={styles.imagePath2}
    >
      <Image
        src='/magazine/9/images/3132_path.png'
        width={1141}
        height={1152}
      />
    </div>

    <a
      href='https://foundation.app/@Ancientman/MyHero/1'
      target='_blank'
    >
      <video muted loop autoPlay className={styles.video1}>
        <source
          src={`${DIGIFIZZY_S3}/11/videos/3132_video1.mp4`}
          type='video/mp4'
        />
      </video>
    </a>

    <a
      href='https://superrare.com/artwork-v2/moses-and-the-golden-calf-28019'
      target='_blank'
    >
      <video muted loop autoPlay className={styles.video2}>
        <source
          src={`${DIGIFIZZY_S3}/11/videos/3132_video2.mp4`}
          type='video/mp4'
        />
      </video>
    </a>

    <a
      href='https://superrare.com/0x0ebd06e1c0d349769d18ff8869b144f3db0d3f6e/the-founding-mothers-1'
      target='_blank'
    >
      <div className={[styles.image1, styles.gradient].join(' ')}>
        <Image
          src={`${DIGIFIZZY_S3}/11/images/3132_image1.jpg`}
          width={747}
          height={933}
        />
      </div>
    </a>

    <a
      href='https://foundation.app/@artistation_ps/weshall/1'
      target='_blank'
    >
      <div className={[styles.image2, styles.gradient].join(' ')}>
        <Image
          src={`${DIGIFIZZY_S3}/11/images/3132_image2.jpg`}
          width={459}
          height={535}
        />
      </div>
    </a>

    <div className={[styles.image3].join(' ')}>
      <Image
        src={`${DIGIFIZZY_S3}/11/images/3132_image3.png`}
        width={781}
        height={145}
      />
    </div>

    <div className={styles.text4}>
      The Founding Mothers
    </div>
    <div className={styles.text5}>
      March 2nd 2022
    </div>
    <div className={styles.text6}>
      dielamaharanie
    </div>
    <div className={styles.text7}>
      Fly high.
    </div>
    <div className={styles.text8}>
      March 7th 2022
    </div>
    <div className={styles.text9}>
      Prathamesh Rumaji Shedge
    </div>
    <div className={styles.text10}>
      🐸 HULK PEPE 🐸
    </div>
    <div className={styles.text11}>
      March 7th 2022
    </div>
    <div className={styles.text12}>
      Ancientman
    </div>
    <div className={styles.text13}>
      Moses and The Golden Calf
    </div>
    <div className={styles.text14}>
      Sept 03 2021
    </div>
    <div className={styles.text15}>
      amaan_jahangir
    </div>
  </div>
)

export default Page3132
