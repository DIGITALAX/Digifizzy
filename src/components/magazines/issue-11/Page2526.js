import React from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page2526.module.scss'

const Page2526 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image1}>
        <Image
          src={`${DIGIFIZZY_S3}/11/images/2526_image1.png`}
          width={1920}
          height={1497}
        />
      </div>
    </div>
  )
}

export default Page2526
