import React, { useState, useRef } from 'react'
import Image from 'next/image'
import styles from './page8586.module.scss'

const Page8586 = () => {
  const [isPlaying1, setIsPlaying1] = useState(false)
  const [isPlaying2, setIsPlaying2] = useState(false)
  const refAudio1 = useRef()
  const refAudio2 = useRef()

  const startAudio1 = () => {
    refAudio1.current.play()
    setIsPlaying1(true)
  }

  const pauseAudio1 = () => {
    refAudio1.current.pause()
    setIsPlaying1(false)
  }

  const startAudio2 = () => {
    refAudio2.current.play()
    setIsPlaying2(true)
  }

  const pauseAudio2 = () => {
    refAudio2.current.pause()
    setIsPlaying2(false)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageBackground1}>
        <Image
          src='/magazine/7/images/8586_background1.jpg'
          width={960}
          height={526}
        />
      </div>
      <div className={styles.rect1} />
      <div className={styles.imageBackground2}>
        <Image
          src='/magazine/7/images/8586_background2.jpg'
          width={960}
          height={1497}
        />
      </div>

      <div className={styles.shadowText1}>
        Blockchain Gaming
      </div>
      <div className={styles.shadowText2}>
        Blockchain Gaming
      </div>
      <div className={styles.shadowText3}>
        Blockchain Gaming
      </div>
      <div className={styles.shadowText4}>
        Blockchain Gaming
      </div>
      <div className={styles.shadowText5}>
        Blockchain Gaming
      </div>

      <div className={styles.imageStars1}>
        <Image
          src='/magazine/7/images/8586_image1.png'
          width={242}
          height={242}
        />
      </div>
      <div className={styles.imageStars2}>
        <Image
          src='/magazine/7/images/8586_image1.png'
          width={242}
          height={242}
        />
      </div>
      <div className={styles.imageStars3}>
        <Image
          src='/magazine/7/images/8586_image1.png'
          width={242}
          height={242}
        />
      </div>
      <div className={styles.imageStars4}>
        <Image
          src='/magazine/7/images/8586_image1.png'
          width={242}
          height={242}
        />
      </div>
      <div className={styles.imageStars5}>
        <Image
          src='/magazine/7/images/8586_image1.png'
          width={242}
          height={242}
        />
      </div>
      <div className={styles.imageStars6}>
        <Image
          src='/magazine/7/images/8586_image1.png'
          width={242}
          height={242}
        />
      </div>
      <div className={styles.imageStars7}>
        <Image
          src='/magazine/7/images/8586_image1.png'
          width={242}
          height={242}
        />
      </div>
      <div className={styles.imageStars8}>
        <Image
          src='/magazine/7/images/8586_image1.png'
          width={242}
          height={242}
        />
      </div>
      <div className={styles.imageStars9}>
        <Image
          src='/magazine/7/images/8586_image1.png'
          width={242}
          height={242}
        />
      </div>
      <div className={styles.imageStars10}>
        <Image
          src='/magazine/7/images/8586_image1.png'
          width={242}
          height={242}
        />
      </div>

      <a
        className={styles.rect2}
        href='https://horizon.io '
        target='_blank'
        rel='noreferrer'
      >
        Horizon
      </a>
      <a
        className={styles.rect3}
        href='https://sequence.build'
        target='_blank'
        rel='noreferrer'
      >
        Sequence Build
      </a>
      <a
        className={styles.rect4}
        href='https://sequence.info '
        target='_blank'
        rel='noreferrer'
      >
        Sequence Info
      </a>
      <a
        className={styles.rect5}
        href='https://skyweaver.net'
        target='_blank'
        rel='noreferrer'
      >
        Skyweaver
      </a>

      <div className={styles.text1}>
        Skyweaver <br />
        Horizon Games <br />
        Sequence <br />
      </div>
      <div className={styles.text2}>
        Skyweaver <br />
        Horizon Games <br />
        Sequence <br />
      </div>
      <div className={styles.text3}>
        Listen in for a conversation with Michael Sanders
      </div>
      <div className={styles.text4}>
        Penguin
      </div>
      <div className={styles.text5}>
        Misanth
      </div>
      <div className={styles.text6}>
        Quest Mechanics, leveling up, Skin in the game.
      </div>
      <div className={styles.text7}>
        Follow more of the MetaGame journey <a href='https://twitter.com/MetaFam' target='_blank' rel='noreferrer'>here</a>.
      </div>
      <div className={styles.text8}>
        MetaGame
      </div>

      <div className={styles.image2}>
        <Image
          src='/magazine/7/images/8586_image2.png'
          width={601}
          height={584}
        />
      </div>
      <a className={styles.image3}>
        <Image
          src='/magazine/7/images/8586_image3.png'
          width={272}
          height={272}
        />
      </a>

      <div className={styles.imageCircle1}>
        <Image
          src='/magazine/7/images/8586_image4.png'
          width={210}
          height={210}
        />
      </div>
      <div className={styles.imageCircle2}>
        <Image
          src='/magazine/7/images/8586_image4.png'
          width={210}
          height={210}
        />
      </div>
      <div className={styles.imageCircle3}>
        <Image
          src='/magazine/7/images/8586_image4.png'
          width={210}
          height={210}
        />
      </div>
      <div className={styles.imageCircle4}>
        <Image
          src='/magazine/7/images/8586_image4.png'
          width={210}
          height={210}
        />
      </div>
      <div className={styles.imageCircle5}>
        <Image
          src='/magazine/7/images/8586_image4.png'
          width={210}
          height={210}
        />
      </div>
      <div className={styles.imageCircle6}>
        <Image
          src='/magazine/7/images/8586_image4.png'
          width={210}
          height={210}
        />
      </div>
      <div className={styles.imageCircle7}>
        <Image
          src='/magazine/7/images/8586_image4.png'
          width={210}
          height={210}
        />
      </div>
      <div className={styles.imageCircle8}>
        <Image
          src='/magazine/7/images/8586_image4.png'
          width={210}
          height={210}
        />
      </div>

      <div className={styles.imageCircle1}>
        <Image
          src='/magazine/7/images/8586_image4.png'
          width={210}
          height={210}
        />
      </div>

      <a
        className={styles.image4}
        href='https://twitter.com/c0mput3rxz'
        target='_blank'
        rel='noreferrer'
      >
        <Image
          src='/magazine/7/images/8586_image5.png'
          width={210}
          height={210}
        />
      </a>

      <a
        className={styles.image5}
        href='https://twitter.com/Misannthrop'
        target='_blank'
        rel='noreferrer'
      >
        <Image
          src='/magazine/7/images/8586_image6.png'
          width={210}
          height={210}
        />
      </a>

      <audio ref={refAudio1} loop>
        <source src='/magazine/7/sounds/8586_sound1.mp3' type='audio/mpeg' />
      </audio>

      <div
        className={styles.playButton1}
        onClick={() => {
          isPlaying1 ? pauseAudio1() : startAudio1()
        }}
      >
        {
          !isPlaying1
            ? <img className={styles.imagePlay1} src='/magazine/7/images/8586_playbutton1.png' />
            : <img className={styles.imagePause1} src='/magazine/7/images/8586_pausebutton1.png' />
        }
      </div>

      <audio ref={refAudio2} loop>
        <source src='/magazine/7/sounds/8586_sound2.mp3' type='audio/mpeg' />
      </audio>

      <div
        className={styles.playButton2}
        onClick={() => {
          isPlaying2 ? pauseAudio2() : startAudio2()
        }}
      >
        {
          !isPlaying2
            ? <img className={styles.imagePlay2} src='/magazine/7/images/8586_playbutton2.png' />
            : <img className={styles.imagePause2} src='/magazine/7/images/8586_pausebutton2.png' />
        }
      </div>
    </div>
  )
}

export default Page8586
