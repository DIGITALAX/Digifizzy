import React from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page3334.module.scss'

const Page3334 = () => (
  <div className={styles.wrapper}>
    <div className={styles.imageBackground}>
      <Image
        src={`${DIGIFIZZY_S3}/11/images/3334_background.jpg`}
        width={1920}
        height={1497}
      />
    </div>
  </div>
)

export default Page3334
