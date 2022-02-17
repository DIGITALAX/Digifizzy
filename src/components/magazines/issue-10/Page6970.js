import React from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page6970.module.scss'

const Page6970 = () => (
  <div className={styles.wrapper}>
    <div className={styles.imageBackground}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/6970_background.jpg`}
        width={1920}
        height={1497}
      />
    </div>    
  </div>
)

export default Page6970
