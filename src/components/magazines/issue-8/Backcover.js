import React from 'react'
import Image from 'next/image'
import styles from './backcover.module.scss'

const Backcover = () => (
  <div className={styles.wrapper}>
    <div className={styles.imageBackground}>
      <Image
        src='/magazine/8/images/backcover_background.jpg'
        width={960}
        height={1497}
      />
    </div>
    <div className={styles.image1}>
      <Image
        src='/magazine/8/images/frontcover_image1.png'
        width={256}
        height={316}
      />
    </div>
  </div>
)

export default Backcover
