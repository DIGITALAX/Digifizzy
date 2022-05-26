import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page7576.module.scss';

const Page7576 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.back}>
        <Image src={`${DIGIFIZZY_S3}/13/images/7576_back.png`} width={1920} height={1497} />
      </div>
      <div className={styles.back1}></div>

      <a href="https://twitter.com/nounsoup" target="_blank" className={styles.link1}>
        CITY KITTY
      </a>

      <div className={styles.image1}>
        <Image src={`${DIGIFIZZY_S3}/13/images/7576_image1.png`} width={408} height={333} />
      </div>
      <div className={styles.image2}>
        <Image src={`${DIGIFIZZY_S3}/13/images/7576_image2.png`} width={331} height={311} />
      </div>
      <div className={styles.image3}>
        <Image src={`${DIGIFIZZY_S3}/13/images/7576_image3.png`} width={415} height={553} />
      </div>
      <div className={styles.text1}>New York City Based Street Artist</div>
      <div className={styles.text2}>New York City Based Street Artist</div>
      <div className={styles.text3}>
        When I moved to NYC I was a broke struggling artist trying to make paintings to get into
        gallery shows. I started working with an art fair called “the fountain art fair” a few
        months after moving here. They focused on street art and I started to see how artist were
        utilizing the streets as an alternative route to get my work seen. Almost 14 years later I
        am still in love with using the streets as an outlet, I love the purity of it. You don’t
        need permission and once your work is out on the streets it lives its own life.
      </div>
      <div className={styles.text4}>
        The biggest shifts I have seen is the number of artists that create handmade work dwindle to
        a small few. Also, with the rise of social media the reasons why people put art on the
        street has also changed.
      </div>
      <div className={styles.text5}>
        When I first started doing street art in NYC the scene had a lot of diversity in styles that
        inspired me. Seeing works by artists such as Swoon, ASVP, Sweet Toof, C215, Skewville, ELLE
        and many more made it exciting to walk around the city and see what you will find.
      </div>
      <div className={styles.text6}>
        I think NFTs are exciting and confusing. I just released my first collection of my
        “Cantastic Creatures” which are 1 of 1 NFTs where you also get the physical piece of art
        used to create the NFT. I’m still struggling with the idea of not physically creating
        something.
      </div>
      <div className={styles.text7}>
        I’m always collaborating with different artists so there is nothing specific I have in mind.
        I’m headed back to Europe in August with RX Skulls and Voxx Romana which will be fun. It’s
        always great to travel and see what is happening in other cities scenes.
      </div>
    </div>
  );
};

export default Page7576;
