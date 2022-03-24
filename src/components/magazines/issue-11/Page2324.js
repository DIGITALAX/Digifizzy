import React from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page2324.module.scss'

const Page2324 = () => (
  <div className={styles.wrapper}>
    <div className={styles.rect1}></div>
    <div className={styles.image1}>
      <Image
        src={`${DIGIFIZZY_S3}/11/images/2324_image1.png`}
        width={1920}
        height={1178}
      />
    </div>
    <div className={styles.image2}>
      <Image
        src={`${DIGIFIZZY_S3}/11/images/2324_image2.png`}
        width={807}
        height={1497}
      />
    </div>
    
  </div>
)

export default Page2324
