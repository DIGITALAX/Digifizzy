import React from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page2122.module.scss'

const Page2122 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image1}>
        <Image
          src={`${DIGIFIZZY_S3}/11/images/2122_image1.png`}
          width={1920}
          height={1497}
        />
      </div>
      <div className={styles.text1}>
        <span>Wa</span>sh T<span>rad</span>ing <span>t</span>he <span>La</span>pse         
      </div>
    </div>
  )
}

export default Page2122
