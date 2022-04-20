import React from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page101102.module.scss'

const Page101102 = () => {
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageBackground}>
        <Image
          src={`${DIGIFIZZY_S3}/11/images/101102_background.jpg`}
          width={1920}
          height={1497}
        />
      </div>
    </div>
  )
}

export default Page101102
