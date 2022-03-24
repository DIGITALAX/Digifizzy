import React from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page7576.module.scss'

const Page7576 = () => (
  <div className={styles.wrapper}>
    <div className={styles.imageBackground}>
      <Image
        src={`${DIGIFIZZY_S3}/11/images/7576_background.jpg`}
        width={1920}
        height={1497}
      />
    </div>

    <div className={styles.rect1}>
    </div>
    <div className={styles.rect2}>
    </div>
  </div>
)

export default Page7576
