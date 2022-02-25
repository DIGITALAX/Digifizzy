import React from 'react'
import { DIGIFIZZY_S3 } from '@constants/urls'
import Image from 'next/image'
import styles from './page5758.module.scss'

const Page5758 = () => (
  <div className={styles.wrapper}>
    <div className={styles.imageBackground}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/5758_background.jpg`}
        width={960}
        height={1497}
      />
    </div>
    <div className={styles.rect1}>
    </div>
    <div className={[styles.image1, styles.gradient].join(' ')}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/5758_image1.jpg`}
        width={583}
        height={363}
      />
    </div>
    <div className={[styles.image2, styles.gradient].join(' ')}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/5758_image2.jpg`}
        width={583}
        height={363}
      />
    </div>
    <div className={[styles.image3, styles.gradient].join(' ')}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/5758_image3.jpg`}
        width={583}
        height={326}
      />
    </div>
    <div className={styles.image4}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/5758_image4.png`}
        width={471}
        height={471}
      />
    </div>
    <div className={styles.image41}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/5758_image4.png`}
        width={471}
        height={471}
      />
    </div>
    <div className={styles.image5}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/5758_image5.png`}
        width={471}
        height={377}
      />
    </div>
    <div className={styles.image51}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/5758_image5.png`}
        width={471}
        height={377}
      />
    </div>
    <div className={styles.image52}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/5758_image5.png`}
        width={471}
        height={377}
      />
    </div>
    <div className={styles.text1}>
      Demon Studios is live with the first beta of pizza draw! You can check out the game below and keep your point score through collection more pizza!      
    </div>
    <div className={styles.text2}>
      Two players go head to head to collect as many slices as possible within the level time limit to stay in the game and keep survival points high.
    </div>

    <div className={styles.textPizza1}>
      PIZZA DRAW
    </div>
    <div className={styles.textPizza2}>
      PIZZA DRAW
    </div>
    <div className={styles.textPizza3}>
      PIZZA DRAW
    </div>
  </div>
)

export default Page5758
