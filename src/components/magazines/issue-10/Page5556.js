import React from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page5556.module.scss'

const Page5556 = () => (
  <div className={styles.wrapper}>
    <div className={styles.imageBackground}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/5556_background.jpg`}
        width={1920}
        height={1497}
      />
    </div>
  </div>
)

export default Page5556
