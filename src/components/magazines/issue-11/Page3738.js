import React from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page3738.module.scss'

const Page3738 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageBackground}>
        <Image
          src={`${DIGIFIZZY_S3}/10/images/3738_background.jpg`}
          width={1920}
          height={1497}
        />
      </div>

      <div className={styles.rect1}></div>
      <div className={styles.rect2}></div>

      <a
        href='https://twitter.com/nftandnewton'
        target='_blank'
      >
        <div className={styles.text1}>
          Newton Lee
        </div>
      </a>
      <div className={styles.text2}>
        I am a Biology major with a background in biomedical research. Several months ago, I decided to make a commitment to educate myself on cryptocurrency, blockchain.  I recognized there was a lot of confusion and misinformation with the sources presented being intimidating to the public. So, I decided to immerse myself in seminars and events for the space.   I started gaining exposure to NFT's about 3 months ago.  It's only within the past month I have become aware of how NFT's can truly benefit creatives (i.e. royalties for artists, a major game-changer for the profession).  I'm a firm believer that digital currency will become prominent in the future and blockchain technology will have wide-ranging beneficial impacts for society.
        <br /><br />
        I suppose all along I've been a foodie since I was a notoriously picky eater as a child.  As an adult I have become a craft beer nerd.  What I have noticed in American restaurants is a lack of coordination for (craft) beer and food pairings.  During the pandemic, I decided to experiment on my own and documented the various combinations as a photographic record on my smartphone.  I have created some intriguing pairings that have resulted in a pleasant gastronomic experience and believe the world would benefit from that knowledge.        
      </div>
      <div className={styles.text3}>
        Decentralization is the polar opposite of the "command and control" systems that currently permeate society, (which in my opinion hinders creativity). Instead, decentralization encourages collaboration through the coordination of various parties working together.  Because there isn't a dominant paradigm from overarching leadership, creativity is encouraged in this setting.  In a way, there is a striking parallel between a decentralized system and how the brain works through sensory integration (coordinating a response after input from various stimuli).
        <br /><br />
        I’m really just immersing myself (and learning/participating) in the NFT/Blockchain/crypto space right now and seeing where that takes me.  Thankfully, I have a growth mindset and am willing to try new things, even though I may feel awkward initially.  This will be a significant work in progress but I intend to learn and apply social media properly for the NFT space.  I also am doing my due diligence before selecting a secure option for an NFT (and crypto) wallet.  A fitting sentiment for those that embrace the decentralized aspect of Web3, is "a rising tide lifts all ships."  The potential of NFT's to raise the profile of creatives from all sorts of backgrounds globally and allow them to share and spread the wealth to uplift others is a beautiful thing and that should be encouraged instead of upholding the current global system that creates a narrow funnel of wealth.
      </div>

      <div className={styles.image1}>
        <Image
          src={`${DIGIFIZZY_S3}/10/images/3738_image1.jpg`}
          width={272}
          height={364}
        />
      </div>
      <div className={styles.image2}>
        <Image
          src={`${DIGIFIZZY_S3}/10/images/3738_image2.jpg`}
          width={272}
          height={363}
        />
      </div>
      <div className={styles.image3}>
        <Image
          src={`${DIGIFIZZY_S3}/10/images/3738_image3.jpg`}
          width={272}
          height={362}
        />
      </div>
    </div>
  )
}

export default Page3738
