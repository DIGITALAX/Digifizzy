import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page1718.module.scss'

const Page1718 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.background}>
        <Image
          src={`${DIGIFIZZY_S3}/10/images/1718_background.jpg`}
          width={1618}
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

      <div className={[styles.image1].join(' ')}>
        <Image
          src={`${DIGIFIZZY_S3}/10/images/1718_image1.png`}
          width={252}
          height={447}
        />
      </div>
      <div className={[styles.image2].join(' ')}>
        <Image
          src={`${DIGIFIZZY_S3}/10/images/1718_image2.png`}
          width={438}
          height={441}
        />
      </div>
      <div className={[styles.image3].join(' ')}>
        <Image
          src={`${DIGIFIZZY_S3}/10/images/1718_image3.png`}
          width={425}
          height={249}
        />
      </div>
      <div className={[styles.image4].join(' ')}>
        <Image
          src={`${DIGIFIZZY_S3}/10/images/1718_image4.png`}
          width={266}
          height={249}
        />
      </div>

      <a
        className={styles.link1}
        href='https://twitter.com/akim_funk'
        target='_blank'
      >
        <div className={styles.text1}>
          Akim Funk Buddha
        </div>
        <div className={styles.text2}>
          Akim Funk Buddha
        </div>
      </a>

      <div className={styles.leftSideFrame} />
      <div className={[styles.animationFrame, styles.leftSideImageWrapper].join(' ')}>
        <img src='./magazine/1/images/howtogetintext 2.png' alt='' />
        <img src='./magazine/1/images/howtogetintext 2.png' alt='' />
        <img src='./magazine/1/images/howtogetintext 2.png' alt='' />
        <img src='./magazine/1/images/howtogetintext 2.png' alt='' />
      </div>
      <div className={styles.rightSideFrame} />
      <div className={[styles.animationFrame, styles.rightSideImageWrapper].join(' ')}>
        <img src='./magazine/1/images/howtogetintext 1.png' alt='' />
        <img src='./magazine/1/images/howtogetintext 1.png' alt='' />
        <img src='./magazine/1/images/howtogetintext 1.png' alt='' />
        <img src='./magazine/1/images/howtogetintext 1.png' alt='' />
      </div>
    </div>
  )
}

export default Page1718
