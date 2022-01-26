import React from 'react'
import Image from 'next/image'
import styles from './page4344.module.scss'

const Page4344 = () => (
  <div className={styles.wrapper}>
    <video muted loop autoPlay className={styles.leftBackground}>
      <source src='/magazine/8/videos/4344_left.mov' type='video/mp4' />
    </video>
    <div className={styles.rightBackground}>
      <Image src='/magazine/8/images/4344_right.jpg' width={960} height={1497} />
    </div>
    <div className={styles.text1}>
      PJ Richardson is a digital artist focusing on colorful, happy, 3d design driven art. Combining
      his graffiti art background with decades in brand design and motion graphics, his character
      based 3d art combines both for a colorfully story based approach across still work and
      animation.
    </div>
    <a href='https://www.instagram.com/pj_richardson/' target='_blank' rel='noreferrer'>
      <div className={styles.text2}>PJ Richardson</div>
    </a>
    <div className={styles.text3}>
      Àsá is a unique Digitally generated model. An Energetic Black Elf born in the metaverse… Àsá is a very flexible model who loves to explore through the virtual space.
    </div>
    <a
      className={styles.text4}
      href='https://designers.digitalax.xyz/designers/%C3%80s%C3%A1/'
      target='_blank'
    >
      ÀSÁ
    </a>
  </div>
)

export default Page4344
