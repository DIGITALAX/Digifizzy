import React from 'react';
import { DIGIFIZZY_S3 } from '@constants/urls';
import Image from 'next/image';
import styles from './page6162.module.scss';

const Page6162 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.rect1}></div>

      <video autoPlay muted loop className={styles.video1}>
        <source src="./magazine/1/videos/moshed-05-02-1-15-28.mp4" type="video/mp4" />
      </video>
      <div className={styles.image1}>
        <Image src={`${DIGIFIZZY_S3}/13/images/6162_image1.png`} width={262} height={1640} />
      </div>
      <div className={styles.text5}>SWITZERLAND</div>
      <div className={styles.text6}> INTERNATIONAL PLAYERS</div>

      <div className={styles.image3}>
        <Image src={`${DIGIFIZZY_S3}/13/images/6162_image2.png`} width={1424} height={882} />
      </div>
      <div className={styles.text1}>Switzerland crypto regulation</div>
      <div className={styles.text2}>
        Switzerland is none other than home of the crypto valley in Zug, near Zurich. It’s known
        internationally as one of the world’s leading centers for fostering decentralised projects,
        activity, communities and cryptographic technology innovation.
        <br />
        <br />
        Virtual currencies are classified as assets or property under Swiss Law, exchanges are fully
        legal and overall the cryptocurrency regulation is remarkably progressive.
        <br />
        <br />
        However, with all of that said, it’s not all as good as could be for the underlying bedrock
        principles of self sovereignty and personal anonymity within web3. Unlike their historical
        pattern of preserving privacy and secrecy,even in the most unconscionable of circumstances,
        like with how far they went out of their way to hold and hide money,
      </div>
      <div className={styles.text3}>
        gold, art and other assets that the Nazis had plundered from mostly Jewish families
        throughout WWII.
        <br />
        <br />
        The Swiss regulatory approach to crypto has leaned surprisingly in the opposite extreme in
        requiring excessive personal information for KYC, AML reporting.
      </div>
      <div className={styles.text4}>
        It’s not clear whether this is a temporary transition as they adapt to new decentralised
        realities or if it’s in keeping with
      </div>
    </div>
  );
};

export default Page6162;
