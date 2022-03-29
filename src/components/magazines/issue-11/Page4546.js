import React from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page4546.module.scss'

const Page4546 = () => (
  <div className={styles.wrapper}>
    <div className={styles.imageBackground}>
      <Image
        src={`${DIGIFIZZY_S3}/11/images/4546_background.jpg`}
        width={1920}
        height={1497}
      />
    </div>
    <div className={styles.text1}>
      Digitals of Elsewhere CC0 Collaboration #3
    </div>
    <div className={styles.text2}>
      <a
        className={styles.link1}
        href='https://models.digitalax.xyz/models/Mark%20Everett/'
        target='_blank'
      >
        P4DEE_01
      </a>
      {` & `}
      <a
        className={styles.link2}
        href='https://models.digitalax.xyz/models/Que/'
        target='_blank'
      >
        NEMO BURNS.
      </a>
    </div>
  </div>
)

export default Page4546
