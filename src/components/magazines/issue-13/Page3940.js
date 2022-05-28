import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page3940.module.scss';

const Page3940 = () => {
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
      <div className={styles.imageBackground}>
        <Image src={`${DIGIFIZZY_S3}/13/images/3940_back.png`} width={1920} height={1497} />
      </div>

      <a href="https://twitter.com/ConorDalton_GC" target="_blank">
        <div className={styles.image1}>
          <Image src={`${DIGIFIZZY_S3}/13/images/3940_image1.png`} width={230} height={230} />
        </div>
      </a>

      <a
        href="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/81088547632656175704971906033114584980744162324955930331167204896403911344129"
        target="_blank"
      >
        <div className={styles.image2}>
          <Image src={`${DIGIFIZZY_S3}/13/images/3940_image2.png`} width={324} height={447} />
        </div>
      </a>

      <a
        href="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/81088547632656175704971906033114584980744162324955930331167204886508306694145"
        target="_blank"
      >
        <div className={styles.image3}>
          <Image src={`${DIGIFIZZY_S3}/13/images/3940_image3.png`} width={370} height={528} />
        </div>
      </a>

      <div className={styles.text1}>CONOR DALTON</div>
      <div className={styles.text2}>CONOR DALTON</div>
      <div className={styles.text3}>CONOR DALTON</div>
      <div className={styles.text4}>Rhythm to the verse</div>
      <div className={styles.text5}>LUNA | ISLAND PEOPLE II</div>

      <div className={styles.rect1} />
      <div className={styles.rect2} />
      <div className={styles.rect3} />
      <div className={styles.rect4} />

      <div className={styles.text6}>
        I always was in bands with my friends as a teenager, and then moved into electronic music
        later in life, DJing and promoting parties, working in nightclubs and with record labels,
        and then making music and sound engineering which became my full time job for the past 13
        years or so, mastering music every day. Later i also began teaching mastering at various
        schools across the world.
        <br />
        <br />
        When i saw songcamp launch it's first successful experiment, and the thought process behind
        digital ownership, something clicked in my head, i knew that there was something powerful
        going on here which i didn't fully understand. There was a lot of learning to do, and it
        required turning some of my own beliefs upside down. I find a lot of web 3 communities hard
        to get into, and don't quite know my roll in some of these DAO's, but with songcamp it feels
        different, it feels like we are collectively sharing ideas, creativity and building
        friendships. This is the main attraction, to learn, grow and create with very talented
        people.
      </div>
      <div className={styles.text7}>
        Definitely it has the potential, but it's hard to say how it will evolve. The technology is
        neutral, it's up to us how we use it, I have faith in the technology when i see the work
        that songcamp is doing, integrating ownership of our collective creations into the splits,
        we can move together as one organism with our collective decisions and rewards.
        <br />
        <br />I have been making paintings and releasing them as 1/1 NFT's which you can find on my
        foundation and opensea and this has been a lovely outlet for my artwork which wasn't
        possible before, a few years ago i just painted for relaxation and never intended to do
        anything with my creations but now all of a sudden i can put them out into the world. Also,
        i have created music and audio stories with the songcamp Elektra project which we sold as
        NFT's, as well as mastering many NFT music releases (sometimes being paid a fee, sometimes
        being paid as part of the smart contract split)
      </div>
      <div className={styles.text8}>
        77 artists including myself joined a band and will release a big project
        on June 3rd. This band is called Headless Chaos, and features insanely talented musicians of
        all different genres and styles, we will release our 45 songs in packs of 4 (at random) and
        sell 5000 of these packs. This experiment has been incredibly rewarding and fun. I also
        mastered all of these songs as well as created some.
      </div>
      <div className={styles.text9}>
        Treat it like one big experiment, be playful and focus on making friends and trying things
        out, it might take a while but you will find your community that resonates with your
        personality and skills and when you find them and feel support from their network you will
        begin to see the potential of what's possible. No one has all of the answers yet but it's
        fun to learn, grow and keep up to speed with this new technology. Web3 might not have all of
        the answers, but it's not like the old system was working well either so i believe there is
        room for improvement on how we value art and music rather than letting the value of our
        creations always flow up to the top.
      </div>
      <div className={styles.image4}>
        <Image src={`${DIGIFIZZY_S3}/13/images/3940_image4.png`} width={389} height={340} />
      </div>

      <div
        className={styles.imagePlayButton}
        onClick={() => {
          if (play) {
            pauseAudio();
          } else {
            startAudio();
          }
        }}
      >
        <img
          src={`${DIGIFIZZY_S3}/13/images/3940_${play ? 'pause' : 'play'}.png`}
          alt="playbutton"
        />
      </div>
      <audio ref={refAudio} loop>
        <source src={`${DIGIFIZZY_S3}/13/sounds/3940_audio1.mp3`} type="audio/mp3" />
      </audio>
    </div>
  );
};

export default Page3940;
