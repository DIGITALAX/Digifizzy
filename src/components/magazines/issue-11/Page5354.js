import React from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page5354.module.scss'

const Page5354 = () => (
  <div className={styles.wrapper}>
    <div className={styles.imageBackground}>
      <Image
        src={`${DIGIFIZZY_S3}/11/images/5354_background.jpg`}
        width={1920}
        height={1497}
      />
    </div>
    <a
      href='https://twitter.com/SalvinoArmati'
      target='_blank'
      className={styles.image1}
    >
      <Image
        src={`${DIGIFIZZY_S3}/11/images/5354_image1.png`}
        width={246}
        height={246}
      />
    </a>
    <a
      href='https://twitter.com/SignoraArmati'
      target='_blank'    
      className={styles.image2}
    >
      <Image
        src={`${DIGIFIZZY_S3}/11/images/5354_image2.png`}
        width={246}
        height={246}
      />
    </a>
  </div>
)

export default Page5354
