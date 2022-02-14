import React from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page9798.module.scss'

const Page9798 = () => (
  <div className={styles.wrapper}>
    <div className={styles.imageBackground}>
      <Image
        src='/magazine/9/images/9798_background.jpg'
        width={1920}
        height={1497}
      />
    </div>
  </div>
)

export default Page9798
