import React from 'react'
import Image from 'next/image'
import styles from './page4748.module.scss'

const Page4748 = () => (
  <div className={styles.wrapper}>
    <video muted loop autoPlay className={styles.leftBackground}>
      <source src='/magazine/8/videos/4748_left.mp4' type='video/mp4' />
    </video>
    <div className={styles.rightBackground}>
      <Image src='/magazine/8/images/4748_image1.jpg' width={960} height={1497} />
    </div>
    <div className={styles.text1}>
      A CGI "Afrofuturistic transhuman" character that blurs the lines between human and non-human.
      Àwèlé is the digital visionaire of Afrofuturism.
    </div>
    <a href='https://www.instagram.com/awele.meta/' target='_blank' rel='noreferrer'>
      <div className={styles.text2}>Àwèlé</div>
    </a>
    <div className={styles.text3}>
      Neighborhood Vibes in a Limitless Verse
    </div>
    <div className={styles.text4}>
      Peezy
    </div>
  </div>
)

export default Page4748
