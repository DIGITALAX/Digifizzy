import React from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page7374.module.scss'

const Page7374 = () => (
  <div className={styles.wrapper}>
    <div className={styles.imageBackground}>
      <Image
        src={`${DIGIFIZZY_S3}/11/images/7374_background.jpg`}
        width={960}
        height={1497}
      />
    </div>
    <div className={styles.rect1}></div>
  </div>
)

export default Page7374
