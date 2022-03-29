import React from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page4142.module.scss'

const Page4142 = () => (
  <div className={styles.wrapper}>
    <div className={styles.imageBackground}>
      <Image
        src={`${DIGIFIZZY_S3}/11/images/4142_background.jpg`}
        width={1920}
        height={1497}
      />
    </div>
    <div className={styles.text4}>
      SEEN WITH
    </div>
    <div className={styles.image1}>
      <Image
        src={`${DIGIFIZZY_S3}/11/images/4142_image1.png`}
        width={518}
        height={76}
      />
    </div>
    
    <div className={styles.text1}>
      Throughout the Metaverse
    </div>
    <div className={styles.text2}>
      Digitals of Elsewhere CC0 Collaboration #1
    </div>
    <div className={styles.text3}>
      <a
        className={styles.link1}
        href='https://models.digitalax.xyz/models/vihka/'
        target='_blank'
      >
        Vihka
      </a>
      {` & `}
      <a
        className={styles.link2}
        href='https://models.digitalax.xyz/models/M%C3%98d3xX/'
        target='_blank'
      >
        MØD3XX.
      </a>
    </div>
  </div>
)

export default Page4142
