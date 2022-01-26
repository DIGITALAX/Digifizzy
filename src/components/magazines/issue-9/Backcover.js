import React from 'react'
import Image from 'next/image'
import styles from './backcover.module.scss'

const Backcover = () => (
  <div className={styles.wrapper}>
    <div className={styles.imageBackground}>
      <Image
        src='/magazine/9/images/backcover_background.jpg'
        width={960}
        height={1497}
      />
    </div>
  </div>
)

export default Backcover
