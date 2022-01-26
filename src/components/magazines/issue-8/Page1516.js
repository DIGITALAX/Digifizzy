import React, { useRef, useState } from 'react'
import Image from 'next/image'
import styles from './page1516.module.scss'

const Page1516 = () => {
  const [isPlaying1, setIsPlaying1] = useState(false)
  const refAudio = useRef()

  const startAudio1 = () => {
    refAudio.current.play()
    setIsPlaying1(true)
  }

  const pauseAudio1 = () => {
    refAudio.current.pause()
    setIsPlaying1(false)
  }

  return (
    <div className={styles.wrapper}>
      <audio ref={refAudio} loop>
        <source src='/magazine/8/sounds/1516_sound1.mp3' type='audio/mpeg' />
      </audio>
      <div className={styles.image1}>
        <Image
          src='/magazine/8/images/1516_image1.png'
          width={1920}
          height={1497}
        />
      </div>
      <div className={styles.image2}>
        <Image
          src='/magazine/8/images/1516_image2.png'
          width={464}
          height={1346}
        />
      </div>
      <div className={styles.image3}>
        <Image
          src='/magazine/8/images/1516_image3.png'
          width={200}
          height={200}
        />
      </div>
      <div
        className={styles.playButton1}
        onClick={() => {
          isPlaying1 ? pauseAudio1() : startAudio1()
        }}
      >
        {
          !isPlaying1
            ? <img className={styles.imagePlay} src='/magazine/8/images/1516_playbutton.png' />
            : <img className={styles.imagePause} src='/magazine/8/images/1516_pausebutton.png' />
        }
      </div>

      <div className={styles.text1}>
        Clare Tattersall
      </div>
      <div className={styles.text2}>
        Clare Tattersall
      </div>
      <div className={styles.text3}>
        Bringing digital fashion to the most iconic streets of the city.
      </div>
      <div className={styles.text4}>
        DIGITAL FASHION WEEK NYC
      </div>
    </div>
  )
}

export default Page1516
