import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page7576.module.scss'

const Page7576 = () => {
  const iFrameRef = useRef()

  useEffect(() => {
    const newElement = document.createElement('iframe')
    newElement.src = 'https://audius.co/embed/track/mkRZw?flavor=card'
    newElement.width = '100%'
    newElement.height = '100%'
    newElement.allow = 'encrypted-media'
    newElement.style = 'border: none;'

    while (iFrameRef.current.firstChild) {
      iFrameRef.current.removeChild(iFrameRef.current.firstChild);
    }

    iFrameRef.current.appendChild(newElement)
  }, [])
  
  return (
  <div className={styles.wrapper}>
    <video muted loop autoPlay className={styles.video1}>
      <source
        src={`${DIGIFIZZY_S3}/11/videos/7576_video1.mp4`}
        type='video/mp4'
      />
    </video>

    <div className={styles.rect1}>
    </div>
    {/* <div className={styles.rect2}>
    </div>
    <div className={styles.rect3}>
    </div> */}

    <div className={styles.text1}>
      Camps are cohorted experiments that are run twice a year at Songcamp. Akin to the smushing together of a songwriting camp + web3 hackathon, each camp takes a group of curated artists through an immersive journey of play and experimentation at the far out edges of music + the new internet.
      <br /><br />
      After the extraordinary success of Camp Genesis (Spring 2021) and Camp Elektra (Summer 2021), the anticipation for the third rendition of songcamp's near eponymous camps couldn't come soon enough. And, when it was finally announced, the kick off of Camp Chaos did not disappoint.
      <br /><br />
      As the name suggests, Camp Chaos is filled with dynamic, vibrant and energised activity, content and pure chaos— in a good way. It's quite in keeping with web3 itself, where even though it can seem to any onlooker that the market is entirely bonkers, when you dig one layer deep below the surface there is an unexpected harmony and rhythm to it all. 
      <br /><br />
      Camp Chaos runs for eight weeks and brings together a group of 80 individuals, inclusive of 50 musicians that will each co-create 50 songs. That's right, you heard it, 50 songs. The big five zero. That's like four albums worth of chaotic on-chain tunes.
      <br /><br />
      Every two weeks new teams are fromed in bands of 3 musicians where the group has until the end of the two week period to bring a life an entirely new song from scratch. It's kind of like speed dating without the downsides, with the cross pollination of good vibes on heavy rotation.
      <br /><br />
      Each two week period is named as an ”Act”, with their being four in total across the entirety of the two weeks:
      <br />
      Act I: Order
      <br />
      Act II: Disorder
      <br />
      Act III: Entropy
      <br />
      Act IV: Rebirth
      <br /><br />
      In the last two weeks, the 50 resulting records are mastered, paired with cover artwork, and encased into NFTs.
    </div>
    <div className={styles.text2}>
      Coinciding with Camp Chaos is also the introduction of Chaos Radio— a bi-weekly podcast telling the story of Camp Chaos in real-time. Produced by Levi Downey, with a team of 5, Chaos Radio document how this headless artist Chaos comes into being over these 8 weeks — and shares it with you all as it happens. 
      <br /><br />
      Some of the first episodes have already been released, you can listen in below!
    </div>
    <div className={styles.text3}>
      Only at the start of the journey, there's so much more to come for Camp Chaos. We can't wait for the final outputs and will check back in for issue 12 of DIGIFIZZY as they reach ActIII and set the stage for the web3 immersive digtial theatre to go live!
    </div>

    <div className={styles.iFrameWrapper} ref={iFrameRef}>

    </div>

  </div>
  )
}

export default Page7576
