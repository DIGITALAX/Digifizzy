import React from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page4950.module.scss'

const Page4950 = () => (
  <div className={styles.wrapper}>
    <div className={styles.imageBackground}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/4950_background.jpg`}
        width={1920}
        height={1497}
      />
    </div>
    <div className={styles.rect1}></div>
    <div className={styles.rect2}></div>

    <div className={styles.rect3}></div>
    <div className={styles.rect4}></div>
    <div className={styles.rect5}></div>
    <div className={styles.rect6}></div>
    <div className={styles.rect7}></div>
    <div className={styles.rect8}></div>
    <div className={styles.rect9}></div>

    <div className={styles.circle1}></div>
    <div className={styles.circle2}></div>
    <div className={styles.circle3}></div>
    <div className={styles.circle4}></div>
    <div className={styles.circle5}></div>
    <div className={styles.circle6}></div>
    <div className={styles.circle7}></div>
    <div className={styles.circle8}></div>

    <div className={styles.text1}>
      High Stakes Poker: How it's Played and Lessons Learned   
    </div>
  </div>
)

export default Page4950
