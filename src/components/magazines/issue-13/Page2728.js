import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page2728.module.scss';

const Page2728 = () => {
  const [play, setPlay] = useState(false);
  const refAudio = useRef();

  const startAudio = () => {
    refAudio.current.play();
    setPlay(true);
  };

  const pauseAudio = () => {
    refAudio.current.pause();
    setPlay(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.background1}></div>
      <div className={styles.image1}>
        <Image src={`${DIGIFIZZY_S3}/12/images/2728_image1.png`} width={960} height={320} />
      </div>
      <a href="https://twitter.com/nicodotjpeg" target="_blank">
        <div className={styles.image2}>
          <Image src={`${DIGIFIZZY_S3}/12/images/2728_image3.png`} width={400} height={400} />
        </div>
      </a>
      <div className={styles.image3}>
        <Image src={`${DIGIFIZZY_S3}/12/images/2728_image2.png`} width={960} height={1497} />
      </div>
      <div className={styles.text1}>nicooo.eth</div>
      <div className={styles.text2}>
        the combination of web3, NFTs and other tools for functional self sovereignty
      </div>
      <a href="https://twitter.com/epolynya" className={styles.link1} target="_blank">
        polynya
      </a>
      <div className={styles.text3}>
        1. When talking about UX, a lot of people tend to overlook the simple question of "UX for
        what?". How does web3 and especially ZK scaling solutions improve the ergonomics, the human
        experience, of networked self sovereign activity of many kinds?
        <br />
        <br />
        <div>
          Social recovery, account abstraction and rollups are three key elements. Argent is doing
          stellar work on this front. Once the vision is realised, it will be a superior UX than
          traditional banking, web2 services etc. You log in to everywhere with a single ID, which
          isn't backed by many passwords, many centralized services, but simply your friends and
          family through social recovery.{' '}
        </div>
      </div>
      <div className={styles.text4}>
        3. ZK is a fascinating subject, what got you into it?
        <br />
        <br />
        <div>
          I'm a blockchain skeptic, and didn't see a path towards privacy and scalability. ZK
          finally offered an elegant solution that'll enable blockchains to both scale up and offer
          privacy.{' '}
        </div>
      </div>
      <div className={styles.text5}>
        2. People who criticise the UX laws in web3, in which there are admittedly many, usually
        point to the best of web2 as an example of good UX, but can systems that don't respect user
        needs and self ownership really be said to be serving good UX?
        <br />
        <br />
        <div>
          Quite true, and also, the UX is often terrible. The sign-in experience is heavily
          fragmented, a password manager is a must, and if you do happen to lose your account, it
          can be a long process to recover. Of course, web3 has a ton of work ahead, and it's fair
          to say that currently to a majority of people it's not worth the headache. But as
          mentioned above, the three key elements of social recovery, account abstraction and
          rollups will significantly improve the UX.{' '}
        </div>
      </div>

      <div className={styles.text6}>
        4. Do you have any favourites among all of the different L2 ZK solutions starting to emerge?
        What is it about them that you like better than others?
        <br />
        <br />
        <div>
          No favourites, all ZK teams are doing stellar work. I do have a soft spot for Aztec, as
          it's the only project in the industry that's attempting to solve security,
          decentralization, programmability, privacy and scalability all at once.{' '}
        </div>
      </div>
      <div className={styles.text7}>
        5. Do you think we are getting close to a watershed moment when a decisive number of people
        really get why transaction information and creative independence are essential for a human
        centered web and broader socio economic systems?
        <br />
        <br />
        <div>
          Not really, I think we are several years away, if ever, from having any critical mass
          interacting with these systems. There's awareness about the space, but only a very tiny
          niche actively use these. I think people tend to greatly overestimate how many people want
          said creative independence - I believe a vast majority of people will willingly choose
          custodial services even if web3 proliferates.
        </div>
      </div>

      <div className={styles.text8}>polynya</div>

      <a className={styles.imagePlayButton} onClick={startAudio}>
        <Image src={`${DIGIFIZZY_S3}/12/images/2728_image4.png`} width={169} height={170} />
      </a>
      <a className={styles.imagePauseButton} onClick={pauseAudio}>
        <Image src={`${DIGIFIZZY_S3}/12/images/2728_image5.png`} width={169} height={170} />
      </a>
      <audio ref={refAudio} loop>
        <source src={`${DIGIFIZZY_S3}/12/sounds/2728_audio.m4a`} type="audio/mp3" />
      </audio>
    </div>
  );
};

export default Page2728;
