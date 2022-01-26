import React from 'react'
import Image from 'next/image'
import styles from './page1718.module.scss'

const Page1718 = () => (
  <div className={styles.wrapper}>
    <div className={styles.circle1} />
    <div className={styles.circle2} />
    <div className={styles.circle3} />
    <div className={styles.circle4} />
    <div className={styles.circle5} />
    <div className={styles.circle6} />
    <div className={styles.circle7} />
    <div className={styles.circle8} />
    <div className={styles.circle9} />
    <div className={styles.circle10} />
    <div className={styles.circle11} />

    <a
      href='https://twitter.com/animavirtuality'
      target='_blank'
      className={styles.text1}
      rel='noreferrer'
    >
      Anima Virtuality
    </a>

    <div className={styles.text2}>
      AlexRherrity
    </div>

    <div className={styles.text3}>
      Both my cofounder Neil Voss and I spent years designing and building creator-driven platforms: Ultravisual, Tumblr, Epic Games Store.
      <br /><br />
      It’s the space we’re most passionate about, so we were drawn to web3 early as it evolves the creator movement away from dependence on centralized corporations and ad revenue.
      <br /><br />
      But Anima, founded a year ago, is the first time we’ve built a web3 company.
      <br /><br />
      Anima’s mission is to accelerate creator-driven AR, and, from conception, we planned for blockchain to be the decentralized foundation. We did not expect NFTs to enter public consciousness so quickly, but we viewed them as a philosophical, technical, and necessary solve for the issues creators have had in web2.
      <br /><br />
      Neil and I recognized we were in the midst of a generational change around virtual goods and their value as a form of expression and creativity on par with physical goods. Unfortunately, most of those virtual goods are stuck in game worlds like Roblox and Fortnite.
      <br /><br />
      Augmented reality is a digital medium, like a more flexible game world, that exists on top of the real world. A creative space not tied to any walled garden and inherently shareable in the way we already communicate – the camera.
    </div>

    <div className={styles.text4}>
      We founded Anima to spark creation in AR. We’re an AR platform, an NFT marketplace, and a partner studio to creators venturing into AR.
      <br /><br />
      Facebook and Snap have valuable tools for AR creation within their platforms. Snap also has cultivated an amazing community of creators to build Snap lenses.
      <br /><br />
      The problem with creating in those walled gardens, dependent on ad revenue, is that you’re often dependent on being hired by a brand to make ad lenses to make a living.
      <br /><br />
      It’s terrifying to think of AR or the “camera metaverse” being architected by companies dependent on getting better and better at generating clicks on ads. That motivation is at odds with what is best for the user, creator, and world.
      <br /><br />
      Web3 has enabled and normalized a route for owning and monetizing digital creations, outside of these platforms. We don’t have the ad revenue problem that Snap, FB/IG, and Tiktok do. We won’t even work with brands. We want to make sure AR and the AR version of the metaverse is defined by creators, not brands.
      <br /><br />
      Without a doubt. AR is fractured, with creation and distribution spread across Snap, IG, 8th Wall, Niantic, and custom solutions on ARKit and ARCore. None of those are integrated into 
    </div>

    <div className={styles.text5}>
      web3, and some are directly competitive with web3 goals.
      <br /><br />
      And making things feel and look good in AR is challenging. Real-time 3D design is a difficult skill, most often refined when making 3D games.
    </div>

    <div className={styles.text6}>
      These fractured tool sets and skill gaps will change as a generation growing up making 3D creations in Roblox and Minecraft become more active artistically.
      <br /><br />
      The areas we’re focusing on in AR, aside from fidelity, are interactions that bridge the real and digital worlds. Objects that change based on user actions, time of day, location, or even phase of the moon. And linking the 3D experience back directly to onchain data.
      <br /><br />
      Our first massive project is minting in early January, a set of 8,888 AR NFTs that activate and evolve when placed at certain locations around the world. We worked with street and modern artist Demsky on that project. We’re absurdly excited to see it out in the world, and you can try it out and sign up to be notified of its sale at anima.supply.
      <br /><br />
      The rest of early 2022 will be packed with large and small AR releases, from a high art 1/1 auction at Christie’s to a surreal project inspired by a recent bot attack on our website. All of these are with the purpose of furthering and showing what can be done at the intersection of AR and web3.
    </div>

    <a
      href='https://twitter.com/alexrherrity'
      target='_blank'
      className={styles.image1}
      rel='noreferrer'
    >
      <Image
        src='/magazine/8/images/1718_image1.png'
        width={224}
        height={224}
      />
    </a>

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
  </div>
)

export default Page1718
