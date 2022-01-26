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
      <div className={styles.text2}>
        By day I am an interaction designer working in the world of experimental websites & more traditional mobile & desktop applications. I've been a designer for the past 10 years and like many, my first love was Photoshop and never looked back on the technology side of the design world.  
      </div>
      <div className={styles.text3}>
        Over the past couple of years the generative art movement and its intersection with immersive experiences really sucked me in. 
      </div>
      <div className={styles.text4}>
        My intro to web3 naturally presented itself through exposure to cryptocurrency and NFT’s. Shamefully I sold my first NFT without truly understanding the power of the technology and the freedom web3 brings to the creator and the individual. Although the new digital landscape and the truly connected permissionless future that web3 offers has some obstacles to overcome - it’s progress toward enabling a reality of freedom that has only been an illusion for many people.
      </div>
      <div className={styles.text5}>
        NFT’s have had a profound impact on the digital art scene. People suddenly are placing value & respect in digital art and making people rethink how people can experience the work. There’s an infinite possibility of displaying these creations and it’s much more than a screenshot or slideshow. Currently we go to a museum and stand 6 feet back admiring paintings from a distance - the future is experiences that allow people to become part of the art through interaction. We need to break the old paradigm - people should touch the art, they should feel a part of it. The technology has been here to make that possible, NFT’s are just the catalyst or the messenger.
        <br /><br />
        The biggest game changer for me was discovering the limitless possibilities in Unreal Engine. I have been working on immersive projects for the past 5 or 6 years but always felt like bringing the vision in my head to life met obstacles with the programs and software. I’m a creative coder by adaptation but I feel like the syntax of code really holds me back. I started with all code using Arduino’s & Processing and later transitioned to TouchDesigner where it unlocked smoother integrations with hardware and visual node-based programming but still found it easy to get lost in the complexities. Unreal brought everything together for me as a visual designer that thinks programmatically and the concept that a video game run in real-time similar to interactive installations. I couldn’t believe it took me so long to make that realization. 
      </div>
      <div className={styles.text6}>
        I was always a mega-nerd growing up even if I was good at hiding it. I think it all started becoming clear when the app store was released in 2008 and the countless summers I spent jailbreaking my ipod touch to create my own apps & games using existing projects as a boilerplate. I always rejected traditional art because I never saw it as valuable in my journey to be a successful adult. Luckily my parents convinced me to attend Savannah College of Art & Design for university promising me it was possible to be successful as a designer. I initially went as an advertising major because the direct relation to business made it feel more safe for me. I had always been creating animations and developing complex websites and prototypes but didn’t discover UX until halfway through my degree and realized I couldn’t hide from fate any longer.
      </div>
      <div className={styles.text7}>
        My first endeavor into the professional world of product design started as a school project that lead to award ceremonies like the Red Dot Award in Berlin and the SXSW Innovation Awards in Austin. It was not only inspiring but also humbling, getting a taste for the competition and a reality check on what it takes to bring an idea to life. The project was an AR Physical Therapy utilizing projections and depth sensors to transform your home environment into an interactive playground. We had offers for funding and creating a legitimate startup but ultimately decided we still had some learning to do. Looking back now - after 5 years have passed, similar ideas have been sold for millions but what can you do? My current job has given me the opportunity to work on websites & apps for clients like Yeezy, Beyonce & Pharrell which still is mind blowing sometimes. Recently I have been focused on immersive installations and art exhibitions.  A milestone for me was creating real-time concert visuals on a 60ft 3D LED for some amazing musicians and exhibiting my interactive works at the High Line Nine Gallery in NYC.
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
