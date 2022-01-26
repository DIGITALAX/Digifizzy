import React, { useState, useRef } from 'react'
import Image from 'next/image'
import styles from './page5960.module.scss'

const Page5960 = () => {
  const [play1, setPlay1] = useState(false)
  const [play2, setPlay2] = useState(false)
  const refAudio1 = useRef()
  const refAudio2 = useRef()

  const startAudio1 = () => {
    refAudio1.current.play()
    setPlay1(true)
  }

  const pauseAudio1 = () => {
    refAudio1.current.pause()
    setPlay1(false)
  }
  
  const startAudio2 = () => {
    refAudio2.current.play();
    setPlay2(true)
  }

  const pauseAudio2 = () => {
    refAudio2.current.pause();
    setPlay2(false)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.back}>
        <Image src='/magazine/8/images/5960_back.jpg' width={1920} height={1497} />
      </div>
      <a href='https://twitter.com/DemonStudios6' target='_blank' className={styles.link1} rel='noreferrer'>
        CallBaCKS w/ Heapons
      </a>
      <div className={styles.image1}>
        <Image src='/magazine/8/images/5960_image1.png' width={191} height={223} />
      </div>
      <div
        className={styles.play1}
        onClick={() => {
          play1 ? pauseAudio1() : startAudio1()
        }}
      >
        {!play1 ? (
          <img src='/magazine/8/images/5960_play1.png' height={216} width={216} />
        ) : (
          <img src='/magazine/8/images/5960_pause1.png' height={216} width={216} />
        )}
      </div>


      <audio ref={refAudio1} loop>
        <source src='/magazine/8/sounds/5960_sound1.mp3' type='audio/mpeg' />
      </audio>
      <audio ref={refAudio2} loop>
        <source src='/magazine/8/sounds/5960_sound2.mp3' type='audio/mpeg' />
      </audio>
      <div className={styles.text1}>
        Heapons is an active modder across the indie gaming scene, and with it being our last DIGIFIZZY edition for the year, we called back Heapons to get the latest and greatest of what they have been up to.
      </div>
      <div className={styles.text2}>
        Heapons did not disappoint with a new original track now live. Check it out and hear the rumble from the tunes. 
      </div>
      <div className={styles.text3}>
        Big Wrench is another newer mix by Heapons, with a unique riff and rythm permeating throughout the song’s structure.
      </div>
      <div className={styles.inkText1}>
        As the Ink Flows
      </div>
      <div className={styles.inkText2}>
        As the Ink Flows
      </div>
      <div className={styles.inkText3}>
        As the Ink Flows
      </div>
      <div className={styles.inkText4}>
        As the Ink Flows
      </div>
      <div className={styles.inkText5}>
        As the Ink Flows
      </div>
      <div className={styles.inkText6}>
        As the Ink Flows
      </div>
      <div className={styles.inkText7}>
        As the Ink Flows
      </div>
      <div className={styles.inkText8}>
        As the Ink Flows
      </div>
      
      <div className={styles.wrenchText1}>
        Big Wrench
      </div>
      <div className={styles.wrenchText2}>
        Big Wrench
      </div>
      <div className={styles.wrenchText3}>
        Big Wrench
      </div>
      <div className={styles.wrenchText4}>
        Big Wrench
      </div>
      <div className={styles.wrenchText5}>
        Big Wrench
      </div>
      <div className={styles.wrenchText6}>
        Big Wrench
      </div>
      <div className={styles.wrenchText7}>
        Big Wrench
      </div>

      <div
        className={styles.play2}
        onClick={() => {
          play2 ? pauseAudio2() : startAudio2()
        }}
      >
        {!play2 ? (
          <img src='/magazine/8/images/5960_play2.png' height={216} width={216} />
        ) : (
          <img src='/magazine/8/images/5960_pause2.png' height={216} width={216} />
        )}
      </div>
    </div>
  )
}

export default Page5960
