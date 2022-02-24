import React from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page4546.module.scss'

const Page4546 = () => (
  <div className={styles.wrapper}>
    <div className={styles.imageBackground}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/4546_background.jpg`}
        width={1920}
        height={1497}
      />
    </div>
    <a href='https://models.digitalax.xyz/models/Benjamin%20Taylor/' target='_blank' rel='noreferrer'>
      <div className={styles.text1}>
        Benjamin Taylor
      </div>
    </a>
    <div className={styles.text2}>

    </div>
    <a href='https://models.digitalax.xyz/models/Ricardo%20Llanos/' target='_blank' rel='noreferrer'>
      <div className={styles.text3}>
        Riccardo
      </div>
    </a>
    <div className={styles.text4}>
      I am Ricardo Llanos, a web3 model, with a passion for fitness modeling. I also enjoy doing print, fashion modeling and being part of creative projects. I've had the pleasure of working with multiple photographers in the NJ/NY area. Now I'm excited to jump in and be apart of this new marketplace and join this amazing community!!
    </div>
  </div>
)

export default Page4546
