import React from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page4748.module.scss'

const Page4748 = () => (
  <div className={styles.wrapper}>
    <div className={styles.imageBackground}>
      <Image
        src={`${DIGIFIZZY_S3}/11/images/4748_background.jpg`}
        width={1920}
        height={1497}
      />
    </div>

    <div className={styles.text1}>
      Digitals of Elsewhere CC0 Collaboration #4
    </div>
    <div className={styles.text2}>
      <a
        className={styles.link1}
        href='https://models.digitalax.xyz/models/Ricardo%20Llanos/'
        target='_blank'
      >
        Ricardo
      </a>
      {` & `}
      <a
        className={styles.link2}
        href='https://models.digitalax.xyz/models/Kaia/'
        target='_blank'
      >
        Kaia.
      </a>
    </div>
  </div>
)

export default Page4748
