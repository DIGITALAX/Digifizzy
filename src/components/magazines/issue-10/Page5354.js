import React from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page5354.module.scss'

const Page5354 = () => (
  <div className={styles.wrapper}>
    <div className={styles.imageBackground}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/5354_background.jpg`}
        width={1920}
        height={1497}
      />
    </div>

    <div className={styles.rect1}></div>
    <div className={styles.rect2}></div>

    <div className={styles.text1}>
      
    </div>
  </div>
)

export default Page5354
