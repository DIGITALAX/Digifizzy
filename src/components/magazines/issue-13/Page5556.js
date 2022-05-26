import React, { useRef } from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page5556.module.scss';

const Page5556 = () => {
  const refAudio = useRef();

  return (
    <div className={styles.wrapper}>
      <div className={styles.rect1}></div>
      <a href="https://twitter.com/andreih_eth" target="_blank">
        <div className={styles.image1}>
          <Image src={`${DIGIFIZZY_S3}/13/images/5556_image1.png`} width={310} height={310} />
        </div>
      </a>
      <div className={styles.image2} onClick={() => refAudio.current.play()}>
        <Image src={`${DIGIFIZZY_S3}/13/images/5556_play.png`} width={229} height={229} />
      </div>
      <div className={styles.image3} onClick={() => refAudio.current.pause()}>
        <Image src={`${DIGIFIZZY_S3}/13/images/5556_pause.png`} width={229} height={229} />
      </div>
      <audio ref={refAudio} loop>
        <source src={`${DIGIFIZZY_S3}/13/sounds/5556_audio.mp3`} type="audio/mp3" />
      </audio>
      <video autoPlay loop muted className={styles.back}>
        <source src={`${DIGIFIZZY_S3}/13/videos/5556_video.mp4`} type="video/mp4" />
      </video>
      <div className={styles.overlay} />
      <div className={styles.rect2} />
      <div className={styles.rect3} />
      <div className={styles.rect4} />
      <div className={styles.rect5} />
      <div className={styles.rect6} />
      <div className={styles.text1}>
        Building a <br /> Layer 2 <br /> Twitter Like <br /> Web3 Social <br /> App
      </div>
      <a href="https://twitter.com/postplaza_eth" target="_blank">
        <div className={styles.text2}>PostPlaza.io w/ Andrei</div>
      </a>
      <div className={styles.text3}>Gatekeeper Gardens</div>
      <div className={styles.text4}>
        Sifting through the web2 weeds— spotlighting stories from the walled gardens where they love
        to tangle and lurk.
      </div>
      <div className={styles.text5}>Opensea.</div>
      <div className={styles.text6}>
        For every edition so far, Gatekeeper Gardens has featured a web2 project or traditional
        economy gatekeeper. It’s unfortunate, but it’s all to clear one of the earliest NFT
        marketplaces has fully decided to abandon any claim to web3 and join the web2 bunch.
        <br />
        <br />
        As a whole, these addicts and disciples of decentralisation arbitrarily practice on the
        regular, these hamfisted avoiders of even the slightest hint of any liability lock out, lock
        down, shut down, dismiss, and generally exert control in whatever way they can over good
        faith users and contributors to what is supposed to be a decentralised platform.
      </div>
      <div className={styles.image4}>
        <Image src={`${DIGIFIZZY_S3}/13/images/5556_image3.png`} width={821} height={155} />
      </div>
      <div className={styles.image5}>
        <Image src={`${DIGIFIZZY_S3}/13/images/5556_image2.png`} width={108} height={77} />
      </div>
      <div className={styles.image6}>
        <Image src={`${DIGIFIZZY_S3}/13/images/5556_image2.png`} width={108} height={77} />
      </div>
      <div className={styles.image7}>
        <Image src={`${DIGIFIZZY_S3}/13/images/5556_image2.png`} width={108} height={77} />
      </div>
      <div className={styles.image8}>
        <Image src={`${DIGIFIZZY_S3}/13/images/5556_image2.png`} width={108} height={77} />
      </div>
      <div className={styles.image9}>
        <Image src={`${DIGIFIZZY_S3}/13/images/5556_image2.png`} width={108} height={77} />
      </div>
      <div className={styles.image10}>
        <Image src={`${DIGIFIZZY_S3}/13/images/5556_image2.png`} width={108} height={77} />
      </div>
      <div className={styles.image11}>
        <Image src={`${DIGIFIZZY_S3}/13/images/5556_image2.png`} width={108} height={77} />
      </div>
      <div className={styles.image12}>
        <Image src={`${DIGIFIZZY_S3}/13/images/5556_image2.png`} width={108} height={77} />
      </div>

      <div className={styles.image13}>
        <Image src={`${DIGIFIZZY_S3}/13/images/5556_image2.png`} width={186} height={133} />
      </div>
      <div className={styles.image14}>
        <Image src={`${DIGIFIZZY_S3}/13/images/5556_image2.png`} width={186} height={133} />
      </div>
      <div className={styles.image15}>
        <Image src={`${DIGIFIZZY_S3}/13/images/5556_image2.png`} width={186} height={133} />
      </div>
      <div className={styles.image16}>
        <Image src={`${DIGIFIZZY_S3}/13/images/5556_image2.png`} width={186} height={133} />
      </div>
      <div className={styles.image17}>
        <Image src={`${DIGIFIZZY_S3}/13/images/5556_image2.png`} width={186} height={133} />
      </div>
      <div className={styles.text8}>
        <br />
        <br />
        In truth, we all saw this coming, considering that the idea to pivot to an NFT marketplace
        didn’t even originate with the founders, but rather was planted in their roadmap by the VCs
        at YC during their batch.
        <br />
        <br />
        Ideas can come from anywhere, and even VCs have good ones sometimes, but we’ve all hoped
        that the warning signs of a lack of authenticity would eventually resolve in favour of
        greater decentralisation.
        <br />
        <br />
        As Opensea has taken on larger marketshare and ever greater amounts of investment, those
        hopes continue to be stamped out.
        <br />
        <br />
        Our hopes now must be that robust, truly decentralised protocol level composable and modular
        alternatives pick up the slack and speed ahead. In the future, who knows how many minutes of
        fame everyone will have, what’s clear is that everyone very soon will carry not just our own
        keys but our own marketplaces, entire realms and the know-how to make it ourselves in our
        pockets in a vast expanding verse of self sovereign networks.
      </div>
      <div className={styles.text9}>Destroy the wall</div>
    </div>
  );
};

export default Page5556;
