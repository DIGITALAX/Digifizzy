import React, { useRef } from 'react'
import Image from 'next/image'
import styles from './page1516.module.scss'

const Page1516 = () => {
  const videoRef1 = useRef()
  const videoRef2 = useRef()

  const onClickPlayButton1 = () => {
    videoRef1.current.muted = false
  }
  const onClickPauseButton1 = () => {
    videoRef1.current.muted = true
  }
  
  const onClickPlayButton2 = () => {
    videoRef2.current.muted = false
  }
  const onClickPauseButton2 = () => {
    videoRef2.current.muted = true
  }

  return (
    <div className={styles.wrapper}>
      <a
        className={styles.image1}
        href='https://www.instagram.com/no.fun.studio/'
        target='_blank'
      >
        <Image
          src='/magazine/9/images/1516_image1.jpg'
          width={378}
          height={378}
        />
      </a>

      <div className={styles.text1}>
        No Fun Studio
      </div>
    
      <video autoPlay muted loop className={styles.video1} ref={videoRef1}>
        <source src='/magazine/9/videos/1516_video1.mp4' type='video/mp4' />
      </video>

      <video autoPlay muted loop className={styles.video2} ref={videoRef2}>
        <source src='/magazine/9/videos/1516_video2.mp4' type='video/mp4' />
      </video>

      <a
        className={styles.imagePlayButton1}
        onClick={onClickPlayButton1}
      >
        <Image
          src='/magazine/9/images/1516_playbutton.png'
          width={46}
          height={46}
        />
      </a>
      <a
        className={styles.imagePauseButton1}
        onClick={onClickPauseButton1}
      >
        <Image
          src='/magazine/9/images/1516_pausebutton.png'
          width={46}
          height={46}
        />
      </a>

      <a
        className={styles.imagePlayButton2}
        onClick={onClickPlayButton2}
      >
        <Image
          src='/magazine/9/images/1516_playbutton.png'
          width={46}
          height={46}
        />
      </a>
      <a
        className={styles.imagePauseButton2}
        onClick={onClickPauseButton2}
      >
        <Image
          src='/magazine/9/images/1516_pausebutton.png'
          width={46}
          height={46}
        />
      </a>
    </div>
  )
}

export default Page1516
