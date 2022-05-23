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
        <Image src={`${DIGIFIZZY_S3}/12/images/3940_back.png`} width={1920} height={1497} />
      </div>
      <div className={styles.rect1}></div>
      <div className={styles.rect2}></div>
      <div className={styles.rect3}></div>

      <div className={styles.image1}>
        <Image src={`${DIGIFIZZY_S3}/12/images/3940_image1.png`} width={198} height={198} />
      </div>
      <a href="" target="_blank">
        <div className={styles.link1}>Avinoam Ettun</div>
      </a>
      <div className={styles.text1}>
        I've been making music since the age of ten, and composing was something I was interested in
        from the very beginning. I began playing rock and folk songs and later started learning
        jazz, and by the age of 15, I was creating my own musical projects. The one thing that was
        clear to me from the beginning was that I want to come across as many musical styles as I
        can and, to create something new and meaningful I need to keep my ears always open for new
        possibilities. For me, "the industry" is my way to get my music to as many ears as possible.
        <br />
        <br />I came across the idea of NFTs at my friend's concert. My friends "The Vibe Souls" had
        a beautiful show at a Chelsea art Gallery with incorporated live animation components
        interacting with their music. At this event, I was exposed first to the concept of NFTs. I
        met Emma, who was generous enough to share with me the idea of web 3.0 and how it can impact
        the way we make art. I was amazed by the new possibilities that come with this concept.
      </div>
      <div className={styles.text2}>
        Keeping the agency of the artist, being a good platform for artists from different
        disciplines to collaborate, helping artists to get their works out there to new people, and
        maybe the most interesting and exciting for me - helping artists to create communities.
        <br />
        <br />
        The music industry has changed tremendously in the last few years. As an artist, I'm not
        aiming to be discovered by a big record label as they used to back in the old days. People
        are also not buying CDs like they used to do when I grew up. These days, record labels can
        be our way to create communities of artists who have the same vision and want to develop a
        group of audiences interested in their work. I'm carefully optimistic about how these
        technologies can help artists take back the responsibility for their own work and help them
        create new exciting art.
        <br />
        <br />
        Like in many art platforms these days, the big challenge with NFTs is to present a strong
        idea in a concise piece. Creating in this way is different from making a seven-minute music
        piece that stands for itself. The other thing which I'm
      </div>
      <div className={styles.text3}>
        very excited about is the visual-sound relation, which I find fascinating. The connection
        between visuals and music was always something that fascinated me. I'm now working closely
        with a few people to create an NFT version of my new album, "Searching for Colors," which I
        released on April 25. I'm also looking forward to collaborating with contemporary artists
        and creating music to their visuals, which is a totally different work process.
        <br />
        <br />
        Come open-minded, do not compromise on your artistic values, but be flexible about how you
        can present your art. The world has new ways to help us collaborate which each other,
        discover new artists, create communities, and get our art to new ears.
      </div>
      <div className={styles.text4}>Stay up to date with Avi’s first NFT release!</div>
      <a className={styles.imagePlayButton} href="https://www.avinoamettun.com/" target="_blank">
        <img src={`${DIGIFIZZY_S3}/11/images/2728_playbutton.png`} alt="playbutton" />
      </a>
    </div>
  );
};

export default Page3940;
