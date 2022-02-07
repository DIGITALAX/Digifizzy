import React, { useRef, useState } from 'react'
import Image from 'next/image'
import styles from './page5758.module.scss'

const Page5758 = () => (
  <div className={styles.wrapper}>
    <div className={styles.imageBackground}>
      <Image
        src='/magazine/9/images/5758_background.jpg'
        width={960}
        height={1497}
      />
    </div>
    <div className={styles.rect1}>
    </div>
    <div className={styles.image1}>
      <Image
        src='/magazine/9/images/5758_image1.gif'
        width={296}
        height={294}
      />
    </div>
    <div className={styles.image2}>
      <Image
        src='/magazine/9/images/5758_image2.gif'
        width={218}
        height={445}
      />
    </div>
    <div className={styles.image3}>
      <Image
        src='/magazine/9/images/5758_image3.gif'
        width={277}
        height={445}
      />
    </div>
    <div className={styles.image4}>
      <Image
        src='/magazine/9/images/5758_image4.gif'
        width={217}
        height={445}
      />
    </div>
    <div className={styles.text1}>
      LARA.      
    </div>
    <div className={styles.text2}>
      LARA.
    </div>
    <div className={styles.text3}>
      Modding games was simply a mix of two things I loved, games and art. I absolutely dreamed of being a game designer before. It's a passion I had to toy around with games while having fun playing them at the same time. Drawing and playing, it was double the fun.
    </div>
    <div className={styles.text4}>
      That was persistence. I knew if I did it, it would become true. If I stopped, nobody would make it true as I was the only one with the idea.
    </div>
    <div className={styles.text5}>
      The toughest challenges were the problems in my family, I had to help them, and my old laptop. It would always crash or lag, so I had to do everything slowly. Everything really shaped me to be more patient and not give up on things that seem to not have any potential.
    </div>
    <div className={styles.text6}>
      Well, really, don't give up. It's tough, nothing starts perfect. I started doing traditional art at first, then moving to draw with a mouse for 7 years. It took me 7 years to achieve something. As an artist, you need to pay attention to details better, calculate everything and do it by heart, you'll have cool results.
    </div>

    <iframe
      width="560"
      height="315"
      className={styles.video1}
      src="https://www.youtube.com/embed/fwQy0huHFtU" 
      title="YouTube video player" 
      frameborder="0" 
    >
    </iframe>

    <iframe
      className={styles.video2}
      width='349'
      height='243'
      src='https://www.youtube.com/embed/y5V0s_j73k0'
      frameBorder='0'
    />
  </div>
)

export default Page5758
