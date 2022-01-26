import React from 'react'
import Image from 'next/image'
import styles from './page4748.module.scss'

const Page4748 = () => (
  <div className={styles.wrapper}>
    <div className={styles.imageBackground1}>
      <Image
        src='/magazine/7/images/4748_background1.jpg'
        width={960}
        height={1497}
      />
    </div>
    <video muted loop autoPlay className={styles.imageBackground2}>
      <source src='/magazine/7/videos/4748_video1.mp4' type='video/mp4' />
    </video>
    <a href='https://foundation.app/@lucidmountain/~/17263' target='_blank' rel='noreferrer'>
      <div className={styles.text1}>
        Breathe Deeper
      </div>
    </a>
    <div className={styles.text2}>
      Dive deep inside your consciousness. Be in the state of balance, by being in Dhyana Mudra. Balance the duality across mind, body, and spirit. In that meditative state, cultivate stillness of mind.
      <br /><br />
      Embrace that stillness.
      <br /><br />
      Breathe Deeper and Heal.
    </div>
    <div className={styles.text3}>
      Ashish Bisht
    </div>
    <div className={styles.text4}>
      Hello, I am Ashish Bisht aka LucidMountain, a Freelance Motion Designer and 3D Fashion Illustrator based out of a Himalayan valley called Dehradun, exploring my own surreal world. My artwork carries the essence of reality, abstraction, and spirituality.
    </div>
  </div>
)

export default Page4748
