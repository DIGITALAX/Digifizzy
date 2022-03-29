import React from 'react'
import { DIGIFIZZY_S3 } from '@constants/urls'
import Image from 'next/image'
import styles from './page6162.module.scss'

const Page6162 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.rect1}></div>
      <div className={styles.rect2}></div>

      <video autoPlay muted loop className={styles.video1}>
        <source src='./magazine/1/videos/moshed-05-02-1-15-28.mp4' type='video/mp4' />
      </video>
      <div className={styles.image1}>
        <Image 
          src={`${DIGIFIZZY_S3}/10/images/6162_image3.png`}
          width={262}
          height={1640}
        />
      </div>
      <div className={styles.text1}>ISRAEL</div>
      <div className={styles.text2}> INTERNATIONAL PLAYERS</div>
      <div className={styles.image2}>
        <Image
          src={`${DIGIFIZZY_S3}/11/images/6162_image1.png`}
          width={1415}
          height={814}
        />
      </div>
      <a
        href='https://starkware.co/starknet/'
        target='_blank'
        className={styles.image3}
      >
        <Image
          src={`${DIGIFIZZY_S3}/11/images/6162_image2.png`}
          width={360}
          height={66}
        />
      </a>
      <div className={styles.text3}>
        ZK Rollups in a permissionless decentralised setting, provide the promise of unlimited scalability for layer 1’s like Ethereum and other DAPPs without compromising on composability and security.
        <br /><br />
        Starkware has been one of the leading solutions out of Israel to start doing what it takes to actually scale use and adoption, powering other highly visible platforms like ImmutableX.
        <br /><br />
        Although the Starknet full nodes are yet to go live, we can only hope that this doesn’t turn into the usual years until full on mainnet adoption. Right now, web3 is facing a critical juncture of developer and builder uptake without enough robust on-chain and decentralised options in place for reliable EVM L2, let alone, with all of the magic ZK roll ups add. 
        <br /><br />
        Will starkware be the leading protocol? It’s hard to say, given that just a few months ago it seemed as if Polygon had an insurmountable lead. But what we see time and time again is 
      </div>
      <div className={styles.text4}>
        that no lead is safe when we are still in relatively early days. 
        <br /><br />
        The best bet is always staying true to web3 principles whilst continuing to be nimble in your skills and dedicating substantial effort to ramp up more advanced engineering. 
      </div>

    </div>
  )
}

export default Page6162
