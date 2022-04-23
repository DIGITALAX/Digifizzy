import React from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page3738.module.scss';

const Page3738 = () => {
  return (
    <div className={styles.wrapper}>
      <video muted loop autoPlay className={styles.imageBackground}>
        <source src={`${DIGIFIZZY_S3}/12/videos/3738_video1.mp4`} type="video/mp4" />
      </video>

      <a href="https://twitter.com/ChromaCatsNFT" target="_blank">
        <div className={styles.link1}>CHROMA CATS</div>
      </a>
      <div className={styles.text1}>Diving in with Brenon.jpg</div>
      <div className={styles.text2}>
        From Y2K to geocities, then tumblr to NFTs… I learned a lot growing up inside internet
        culture. Some web3 stars that definitely inspired me early-on are NyanCat creator(Chris),
        Gremplin, and now many many others. Oh and DeadFellaz; Psych& Betty, for sure.
        <br />
        <br />
        <span>Chroma Cats Trajectory from Here... ?!!! </span>
      </div>
      <div className={styles.text3}>To the moon; or at least some nearby asteroid. 😻</div>
      <div className={styles.text4}>
        I also liked the name Chroma Cats Bc it kinda looks like Chrono Cross a videogame I loved in
        the 90s. Also Chroma Cats 0 = (CC0 for short.) there’s even a 1/1 legendary cat in the
        collection names “Cici Zero.”
        <br />
        <br />
        “Chroma Cats” is Y2K inspired, around when I started sharing art on the internet (I was
        about 10y/o.) so naturally there’s a lot of 1999/2000s inspired pop culture, skateboard
        brand influence, Emo and JRPG/anime visual DNA in there. These cats also display a wide
        variety of emotion & visual experimentation; important for storytelling with each piece.
        There’s a thread of indie ethos in Chroma Cats, and Zine culture. Chroma Cats is about
        having fun and making stuff with friends that says how we feel and what we’ve been through.
        Chroma Cat artworks are 100% Creative Commons 0; so many many visual experiences can come
        out of it. I will continue to build with Chroma Cats visual building blocks “forever”, if
        not longer…
      </div>
      <div className={styles.text5}>Contributing Artists</div>
      <div className={styles.text6}>Dylan Reed</div>
      <div className={styles.text7}>Brenon.jpg</div>
      <div className={styles.text8}>Natebear</div>
      <div className={styles.text9}>Tan</div>
      <div className={styles.text10}>
        I think CC0 is probably a fundamentally different approach than a copyright approach by
        method of evolution. A more collectivist-spirit and a DIY-DNA within CC0, so it’s growth
        comes from: accessibility & ease of use. This is really important for builders, the
        audience, and everyone involved. This is why Chroma Cats is CC0; and I would expect many
        other projects to launch as CC0 in the coming years for similar reasons.
        <br />
        <br />
        I’ve seen amazing things happen because of artists who work hard & with purpose in the web3
        space. This has been encouraging over and over again. There’s a certain amount of
        sweat-equity in web3 that allows artists and builders alike to benefit from creative energy
        spent here. This has awesome potential and lessens the friction for artists to start up a
        project. Closing the gap between creators and community seems like a worthwhile effort, so I
        love it.
        <br />
        <br />
        The technology will certainly become more obscured and less noticeable to the end user as
        the web3 process gets easier to use. This along with more builders entering the space will
        be a tipping point. Artists will have an opportunity to move very very fast and build things
        they hadn’t yet dreamed possible before. Good news travels fast and so on. CC0 can
        definitely be a huge piece of that. So make stuff, and have fun!
      </div>
      <a href="https://twitter.com/dylanreed" target="_blank">
        <div className={styles.image1}>
          <Image src={`${DIGIFIZZY_S3}/12/images/3738_image1.png`} width={192} height={192} />
        </div>
      </a>
      <a href="https://twitter.com/brenonJPG" target="_blank">
        <div className={styles.image2}>
          <Image src={`${DIGIFIZZY_S3}/12/images/3738_image2.png`} width={192} height={192} />
        </div>
      </a>
      <a href="https://twitter.com/natebear" target="_blank">
        <div className={styles.image3}>
          <Image src={`${DIGIFIZZY_S3}/12/images/3738_image3.png`} width={192} height={192} />
        </div>
      </a>
      <a href="https://twitter.com/tanduyha" target="_blank">
        <div className={styles.image4}>
          <Image src={`${DIGIFIZZY_S3}/12/images/3738_image4.png`} width={192} height={192} />
        </div>
      </a>

      <div className={styles.gif1}>
        <Image src={`${DIGIFIZZY_S3}/12/images/3738_gif1.gif`} width={302} height={283} />
      </div>
      <div className={styles.gif2}>
        <Image src={`${DIGIFIZZY_S3}/12/images/3738_gif2.gif`} width={302} height={283} />
      </div>
      <div className={styles.gif3}>
        <Image src={`${DIGIFIZZY_S3}/12/images/3738_gif3.GIF`} width={302} height={283} />
      </div>
      <div className={styles.gif4}>
        <Image src={`${DIGIFIZZY_S3}/12/images/3738_gif4.GIF`} width={302} height={283} />
      </div>
    </div>
  );
};

export default Page3738;
