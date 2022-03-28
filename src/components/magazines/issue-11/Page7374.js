import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page7374.module.scss'

const Page7374 = () => {

  const [play, setPlay] = useState(false)
  const refAudio1 = useRef()

  const startAudio1 = () => {
    refAudio1.current.play()
    setPlay(true)
  }

  const pauseAudio1 = () => {
    refAudio1.current.pause()
    setPlay(false)
  }
  

  return (
  <div className={styles.wrapper}>
    <video muted loop autoPlay className={styles.video1}>
      <source
        src={`${DIGIFIZZY_S3}/11/videos/7374_video1.mp4`}
        type='video/mp4'
      />
    </video>
    <div className={styles.rect1}></div>
    <div className={styles.image1}>
      <Image
        src={`${DIGIFIZZY_S3}/11/images/7374_image1.jpg`}
        width={480}
        height={480}
      />
    </div>
    <div className={styles.image2}>
      <Image
        src={`${DIGIFIZZY_S3}/11/images/7374_image2.jpg`}
        width={480}
        height={480}
      />
    </div>
    <div className={styles.image3}>
      <Image
        src={`${DIGIFIZZY_S3}/11/images/7374_image3.jpg`}
        width={480}
        height={480}
      />
    </div>
    <div className={styles.image4}>
      <Image
        src={`${DIGIFIZZY_S3}/11/images/7374_image4.png`}
        width={216}
        height={216}
      />
    </div>
    <a
      className={styles.text1}
      href='https://twitter.com/davidzhorvath'
      target='_blank'
    >
      David Horvath      
    </a>
    <a
      className={styles.text2}
      href='https://twitter.com/davidzhorvath'
      target='_blank'
    >
      David Horvath
    </a>
    <div className={styles.text3}>
      CC0, shifting away from the walled garden digital collectible approach and zero-shill NFTs.
    </div>
    <div className={styles.text4}>
      Tune in below
    </div>
    <div className={styles.text5}>
      Tune in to a conversation with Yash Bora about the evolution of web3, open access and new forms of creative freedom. Can’t say that I agree with all of the takes on licensing and building within this, but it’s very interesting none the less.
    </div>

    <a className={styles.imagePlayButton} onClick={startAudio1}>
      <Image
        src={`${DIGIFIZZY_S3}/11/images/7374_playbutton1.png`}
        width={128}
        height={128}
      />
    </a>
    <a className={styles.imagePauseButton} onClick={pauseAudio1}>
      <Image
        src={`${DIGIFIZZY_S3}/11/images/7374_pausebutton1.png`}
        width={128}
        height={128}
      />
    </a>
    <audio ref={refAudio1} loop>
      <source
        src={`${DIGIFIZZY_S3}/11/sounds/7374_sound1.mp3`}
        type='audio/mp3'
      />
    </audio>

    <a className={styles.imagePlayButton2} onClick={startAudio1}>
      <Image
        src={`${DIGIFIZZY_S3}/11/images/7374_playbutton2.png`}
        width={128}
        height={128}
      />
    </a>
    <a className={styles.imagePauseButton2} onClick={pauseAudio1}>
      <Image
        src={`${DIGIFIZZY_S3}/11/images/7374_pausebutton2.png`}
        width={128}
        height={128}
      />
    </a>
  </div>
  )
}

export default Page7374
