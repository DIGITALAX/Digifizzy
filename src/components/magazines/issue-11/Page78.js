import React from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page78.module.scss'

const Page78 = () => (
  <div className={styles.wrapper}>
    <div className={styles.line1}></div>
    <div className={styles.line2}></div>
    <div className={styles.line3}></div>
    <div className={styles.line4}></div>

    <div className={styles.circle1}></div>
    <div className={styles.circle2}></div>
    <div className={styles.circle3}></div>
    <div className={styles.circle4}></div>
    <div className={styles.circle5}></div>
    <div className={styles.circle6}></div>
    <div className={styles.circle7}></div>
    <div className={styles.circle8}></div>
    <div className={styles.circle9}></div>
    <div className={styles.circle10}></div>
    <div className={styles.circle11}></div>
    <div className={styles.circle12}></div>

    <div className={styles.image1}>
      <Image
        width={758}
        height={1137}
        src={`${DIGIFIZZY_S3}/11/images/0708_image1.png`}
      />
    </div>

    <div className={styles.text1}>
      Built  On <br />
      Open Source
    </div>
    <div className={styles.text2}>
      オープンソース
    </div>
    <div className={styles.text3}>
      オープンソース
    </div>
    <div className={styles.text4}>
      オープンソース
    </div>
    <div className={styles.text5}>
      オープンソース
    </div>
    <div className={styles.text6}>
      オープンソース
    </div>
    <div className={styles.text7}>
      オープンソース
    </div>
  </div>
)

export default Page78
