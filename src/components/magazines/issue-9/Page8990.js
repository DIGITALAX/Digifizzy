import React from 'react'
import Image from 'next/image'
import styles from './page8990.module.scss'

const Page8990 = () => {
  return (
    <div className={styles.wrapper}>
      <video muted loop autoPlay className={styles.video1}>
        <source src='/magazine/9/videos/8990_video1.mp4' type='video/mp4' />
      </video>
      <div className={styles.text1}>
        rEALM rUNWAY #1: nyc fashion Week
      </div>
      <div className={styles.text2}>
        Evening of February 11th, 2022. Exact Location in NYC to be Revealed. 
      </div>
      <div className={styles.text3}>
        We are refashioning the entire industry. 
      </div>
      <div className={styles.text4}>
        Realm Runway events are based all over the world and run for a few hours to a few days at a time. These are offshoots of Web3 Fashion Week and involve showcasing the collections and designs IRL and digitally of the web3 fashion labels.
        <br /><br />
        The first Realm Runway event will be held during NY Fashion Week Feb 11th 2022, starting early evening and running late. 
        <br /><br />
        These events showcase digital and physical models from the Global Models Syndicate strutting runway scenes (both digital 3D animations and in-real-life walks) & wearing indie fashion collections from the Global Designer Network and Designer Realm fashion labels. 
      </div>
      <div className={styles.text5}>
        They are creative explosions of everything metaverse, fashion, modeling & gaming mixed into a hybrid digital physical space. 
      </div>
      <div className={styles.text6}>
        A dedicated sponsor relations DAO was also set up, RRS DAO, which you can read more about <a href='https://digitalax.gitbook.io/realm-runway-sponsors-rrs/' target='_blank'>here.</a>
      </div>
      <div className={styles.text7}>
        All tickets are also minted on-chain as rare NFTs that are sent to your wallet shortly after purchase and are valid to be resold on the secondary market before the event. These NFTs will also provide exclusive offers on further Realm Runway events and activations. 
        <br /><br />
        All tickets are $200. Payment accepted in $MONA, $W3F, BNT, USDT, MATIC, ETH & Fiat. There are three options for purchasing runway tickets:<br />
        Connect Your Wallet and Make Payment in One of the Accepted Crypto Tokens. You will be sent your NFT shortly after payment.<br />
        Stake $W3F/USDT LP on Quickswap & the $W3F Staking Platform. You must remain staked up until the event or your ticket & NFT will not be valid at the door. The tokens will be detected in your wallet.<br />
        Use fiat through Eventbrite. You will be emailed instructions for claiming your NFT, if you choose, after purchasing your ticket.
      </div>

      <div className={styles.image1}>
        <Image
          src='/magazine/9/images/8990_image1.png'
          width={749}
          height={749}
        />
      </div>

      <div className={styles.image2}>
        <Image
          src='/magazine/9/images/8990_image2.png'
          width={951}
          height={825}
        />
      </div>

      <div className={styles.image3}>
        <Image
          src='/magazine/9/images/8990_image3.png'
          width={165}
          height={165}
        />
      </div>

      <a
        href='https://www.realmrunway.xyz/'
        className={styles.textButton}
        target='_blank'
      >
        BOOK TICKETS
      </a>
    </div>
  )
}

export default Page8990
