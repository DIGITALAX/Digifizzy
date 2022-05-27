import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page7374.module.scss';

const Page7374 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image1}>
        <Image src={`${DIGIFIZZY_S3}/13/images/7374_back.png`} width={1920} height={1497} />
      </div>
      <div className={styles.text1}>
        This month, Lens went live with their mainnet launch on Polygon Network.
        <br />
        <br />
        Decentralised social media can’t happen soon enough. From Twitter buyouts by billionaires
        (which may or may not end up happening) to arbitrary account lock outs by unquestionable
        algorithms. Twitter, Insta, Facebook, TikTok and all the rest need to GTFO whilst the rest
        of us LFG— Let’s Fucking Grow!
        <br />
        <br />
        One way of looking at it is that Lens isn’t really inventing anything new, it’s just
        assembling the best parts and building the arguably most essential layer of the web that
        should have always been.
        <br />
        <br />
        When you step back, it’s kind of entirely obvious that every individual should be able to
        retain practical ownership of our messages, our property, our data and ourselves, and move
        beyond being at the <br />
        mercy of the platforms that use us.
      </div>
      <div className={styles.text2}>
        But, we won’t bore you with mere words, it’s best to pursue this rabbit far into its burrow.{' '}
      </div>
      <iframe
        className={styles.video1}
        src="https://www.youtube.com/embed/usgYL-KYd7I?autoplay=1&mute=1&controls=0&loop=1"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
      <iframe
        className={styles.video2}
        src="https://www.youtube.com/embed/2ex8Ns4MzZk?autoplay=1&mute=1&controls=0&loop=1"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
      <iframe
        className={styles.video3}
        src="https://www.youtube.com/embed/KWnfTa1YFLA?autoplay=1&mute=1&controls=0&loop=1"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
      <a href="https://lens.xyz/garden" target="_blank" className={styles.link}>
        <div className={styles.link1}>
          <div className={styles.linkText}>Claim Handle</div>
        </div>
      </a>
    </div>
  );
};

export default Page7374;
