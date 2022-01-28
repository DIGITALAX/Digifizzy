import React, { useState, useRef } from 'react'
import Image from 'next/image'
import styles from './page1718.module.scss'

const Page1718 = () => {
  const [play, setPlay] = useState(false)
  const refAudio = useRef()

  const startAudio = () => {
    refAudio.current.play()
    setPlay(true)
  }

  const pauseAudio = () => {
    refAudio.current.pause()
    setPlay(false)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.background}>
        <Image
          src='/magazine/9/images/1718_background.jpg'
          width={1920}
          height={1497}
        />
      </div>
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

      <a
        className={styles.text1}
        href='https://twitter.com/arcade_xyz'
        target='_blank'
      >
        ARCADE
      </a>
      <div className={styles.text2}>
        CASHTRO
      </div>
      <div className={styles.text3}>
        CASHTRO
      </div>
      <div className={styles.text4}>
        CASHTRO
      </div>
      <div className={styles.text5}>
        CASHTRO
      </div>
      <div className={styles.text6}>
        CASHTRO
      </div>
      <div className={styles.text7}>
        Thinking back to before the great NFT boom that started in late 2020 and continues through the present, there were a handful of, at that point, still nascent and promising paths all of the pioneering efforts in web3 could take. Many thought DeFi would have it's moment to strike in a big way, and they were very right. Predictions about cryptoart and PFPs were spot on. But NFT lending had a brief spark, then fizzled... until now?
        <br /><br />
        Tune into the latest audio session with Cashtro to learn more about Arcade and what they have built to bring NFT lending to the masses.
      </div>

      <a
        className={styles.image1}
        href='https://twitter.com/CashtroCrypto'
        target='_blank'
      >
        <Image
          src='/magazine/9/images/1718_image1.png'
          width={229}
          height={229}
        />
      </a>
      <a className={styles.imagePlayButton} onClick={startAudio}>
        <Image
          src='/magazine/9/images/1718_playbutton.png'
          width={267}
          height={267}
        />
      </a>
      <a className={styles.imagePauseButton}  onClick={pauseAudio}>
        <Image
          src='/magazine/9/images/1718_pausebutton.png'
          width={267}
          height={267}
        />
      </a>
      <audio ref={refAudio} loop>
        <source src='/magazine/9/sounds/1718_sound1.mp3' type='audio/mp3' />
      </audio>
    </div>
  )
}

export default Page1718
