import React from 'react'
import Image from 'next/image'
import styles from './page6364.module.scss'

const Page6364 = () => (
  <div className={styles.wrapper}>
    <video autoPlay muted loop className={styles.video1}>
      <source src='./magazine/1/videos/moshed-05-02-1-15-28.mp4' type='video/mp4' />
    </video>
    <div className={styles.image1}>
      <Image src='/magazine/8/images/6364_image1.png' width={262} height={1640} />
    </div>
    <div className={styles.rightImage}>
      <Image src='/magazine/8/images/6364_right.jpg' width={960} height={1497} />
    </div>

    <div className={styles.text1}>N E T H E R L A N D S</div>
    <div className={styles.text2}> INTERNATIONAL PLAYERS</div>
    <div className={styles.image2}>
      <Image src='/magazine/8/images/6364_image2.png' width={771} height={1045} />
    </div>

    <div className={styles.text3}>Mark Studholme</div>
    <div className={styles.text4}>METAMUNDO </div>
    <div className={styles.text5}>METAMUNDO </div>
    <div className={styles.text6}>METAMUNDO </div>
    <div className={styles.text7}>METAMUNDO </div>
    <a href='https://twitter.com/Mark_Studholme' target='_blank' rel='noreferrer'>
      <div className={styles.link1}>
        <Image src='/magazine/8/images/6364_image3.png' width={314} height={314} />
      </div>
    </a>
    <div className={styles.text8}>
      I have a background in architecture but never practiced, instead, 
      I have been a technology entrepreneur for the past 12 years working at the intersection between architecture and technology. 
      Previously I was on the founding team at Archello.com and founded CrowdyHouse, 
      both ventures had the aim to empower architects and designers and democratize these industries. 
      We did this by building promotional and eCommerce tools. Now with Web3, 
      we can further empower architects and designers by offering ownership of the metaverse and protecting their IP through NFTs and 
      ensuring royalties in perpetuity for these creators.
    </div>
    <div className={styles.text9}>
      One of the biggest challenges with building an attractive and engaging metaverse is 3D content. 
      We know that a lot of land has been sold in the metaverse via Decentraland, The Sandbox, Somnium Space etc. 
      but much of this land is still empty and not built upon. 
      <br /><br />
      Meta is currently hiring 10,000 Content creators to build their version of the metaverse and to create value for Meta. 
      I have a large network of architects who I believe are the best-suited professionals to provide the right 3D content for the open metaverse. 
      We're connecting 3D creators to metaverse landowners/builders through our 3D NFT marketplace.
    </div>

    <div className={styles.text10}>
      Firstly, we are launching our 3D NFT genesis drop. This will be the first interoperable 3D metaverse portal that you can place on your land. 
      <br /><br />
      It will be a showcase of our interoperability technology and also an easter egg portal with many surprises. 
      <br /><br />
      The intention is that every time you walk through this portal it will take you to somewhere else in the metaverse. It could be backstage at the Decentraland festival or within a game in the Sandbox.
      <br /><br />
      Secondly, we will launch the 3D NFT marketplace for metaverse assets in Q1 2022. So keep an eye on our Discord and social media for this launch. We will launch with 5 incredible 3D creators where the assets will be optimized and interoperable across the metaverse. One NFT for use across the metaverse.
    </div>
  </div>
)

export default Page6364
