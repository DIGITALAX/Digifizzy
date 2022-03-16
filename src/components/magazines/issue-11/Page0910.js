import React from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page0910.module.scss'

const Page0910 = () => (
  <div className={styles.wrapper}>
    <div className={styles.line1}></div>
    <div className={styles.line2}></div>

    <div className={styles.circle1}></div>
    <div className={styles.circle2}></div>
    <div className={styles.circle3}></div>

    <div className={styles.text1}>オープンソース</div>
    <div className={styles.text2}>オープンソース</div>
    <div className={styles.text3}>オープンソース</div>
    <div className={styles.text4}>オープンソース</div>
    <div className={styles.text5}>オープンソース</div>
    <div className={styles.text6}>オープンソース</div>
  </div>
)

export default Page0910
