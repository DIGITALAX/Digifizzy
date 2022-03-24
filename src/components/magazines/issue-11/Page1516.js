import React, { useRef } from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page1516.module.scss'

const Page1516 = () => {
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.imageBackground}
      >
        <Image
          src={`${DIGIFIZZY_S3}/11/images/1516_background.jpg`}
          width={1920}
          height={1497}
        />
      </div>
      <div className={styles.text1}>
        Core3D
      </div>
      <div className={styles.text2}>
        Core3D
      </div>

      <a href='https://twitter.com/_Core3D' target='_blank'>
        <div
          className={styles.image1}
        >
          <Image
            src={`${DIGIFIZZY_S3}/11/images/1516_image1.png`}
            width={936}
            height={134}
          />
        </div>
      </a>

      <a href='https://twitter.com/_Core3D' target='_blank'>
        <div
          className={styles.image2}
        >
          <Image
            src={`${DIGIFIZZY_S3}/11/images/1516_image1.png`}
            width={936}
            height={134}
          />
        </div>
      </a>
    </div>
  )
}

export default Page1516
