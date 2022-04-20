import React from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page6566.module.scss'

const Page6566 = () => (
  <div className={styles.wrapper}>
    <div className={styles.rect1}></div>
    <div className={styles.rect2}></div>

    <a
      href='https://twitter.com/SIRINLABS'
      target='_blank'
      className={styles.image1}
    >
      <Image 
        src={`${DIGIFIZZY_S3}/11/images/6566_image1.png`}
        width={400}
        height={400}
      />
    </a>
    <div className={styles.image2}>
      <Image 
        src={`${DIGIFIZZY_S3}/11/images/6566_image2.png`}
        width={960}
        height={411}
      />
    </div>
    <div className={styles.image3}>
      <Image 
        src={`${DIGIFIZZY_S3}/11/images/6566_image3.png`}
        width={597}
        height={361}
      />
    </div>
    <div className={styles.image4}>
      <Image 
        src={`${DIGIFIZZY_S3}/11/images/6566_image4.png`}
        width={575}
        height={633}
      />
    </div>
    <div className={styles.image5}>
      <Image 
        src={`${DIGIFIZZY_S3}/11/images/6566_image5.png`}
        width={307}
        height={656}
      />
    </div>

    {
      Array(42).fill(0).map((value, index) => {
        return (
          <a
            href='https://www.gk8.io/about-us/'
            target='_blank'
            key={index}
            style={{
              position: 'absolute',
              width: '129px',
              height: '60px',
              left: `${983 + parseInt(index % 2) * 152}px`,
              top: `${25 + parseInt(index / 2) * 69}px`
            }}
          >
            <Image
              src={`${DIGIFIZZY_S3}/11/images/6566_image6.png`}
              width={129}
              height={60}
            />
          </a>
        )
      })
    }

    <div className={styles.text1}>
      Years before Steve Jobs stood on stage announcing the first ever iPhone, the mobile phone market changed forever with an earlier release that didn't yet have the phone component built in. When Jobs revealed the iPod to the world for the first time, the big break through selling point was an understanding of what the device did for you, the everyday music lover. 
      <br /><br />
      “A thousand songs in your pocket”, he said.
      <br /><br />
      Now, an Israeli company, working on a fully blockchain enabled, super secured smart phone, would like you to feel the same kind of transformative moment, all over again, but this time, with the equivalent of a thousand keys in your pocket.
      <br /><br />
      The Finney is a cyber-protected, blockchain-enabled smartphone with a built-in cold storage wallet, and a unique Safe Screen for secure crypto transactions. It allows you to decentralise your day to day life and utilise full scale hardware protection. 
    </div>
    <div className={styles.text2}>
      There is a distinct cultural split that causes quite a bit of cognitative dissonance in web3, where while users know that keeping tokens in centralised exchanges is not really maintaining custody of their own keys, they do it anyway. 
      <br /><br />
      The big question is why? 
      <br /><br />
      Well, a large part of it is because many are afraid that if they forget or lose that complex seed phrase then all of their funds will be lost forever. Which, frankly, they're entirely right. Centralised exchanges offer what seems to be a softer interface with better UX for the crypto market, but UX for what? The fact is the UX of centralised exchanges makes it harder for users to practice self sovereign ownership. Which is what makes web3, web3. 
      <br /><br />
      GK8 is based out of Tel Aviv and has built an end-to-end platform for users to be able to manage their tokens and assets on their own, with no reliance on 3rd party<br />
      custody providers with the highest security and a more intuitive user flow. 
      <br /><br />
      The cold vault is capable of creating, signing and sending secure blockchain transactions with no direct internet connectivity, eliminating all potential cyber attack vectors. It's been designed to accomodate some of the most prominent financial institutions in the world, and thus offers levels of customisability not found in more generic retail wallets. Some of the cooler features include programmable rule sets and policies per individual and group interacting with the wallet from whitelists, to caps and velocity. 
      <br /><br />
      As wallet innovation continues to heat up in the web3 market, soon the choice for users of CEX vs DEX will be entirely obvious.       
    </div>
  </div>
)

export default Page6566
