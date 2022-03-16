import React from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page4142.module.scss'

const Page4142 = () => (
  <div className={styles.wrapper}>
    <div className={styles.imageBackground}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/4142_background.jpg`}
        width={1920}
        height={1497}
      />
    </div>
    <div className={styles.text6}>
      SEEN WITH 
    </div>
    <div className={styles.image1}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/4142_image1.png`}
        width={518}
        height={76}
      />
    </div>
    
    <div className={styles.text1}>
      Throughout the Metaverse
    </div>
    <a
      className={styles.text2}
      href='https://models.digitalax.xyz/models/Mark%20Everett/'
      target='_blank'
    >
      MarK
    </a>
    <a
      className={styles.text4}
      href='https://models.digitalax.xyz/models/Que/'
      target='_blank'
    >
      Que
    </a>
    <div className={styles.text5}>
      Web3 IRL Model from Los Angeles. Part time DJ. 
    </div>

  </div>
)

export default Page4142
