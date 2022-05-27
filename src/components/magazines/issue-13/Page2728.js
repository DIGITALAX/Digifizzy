import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page2728.module.scss';

const Page2728 = () => {
  const [play, setPlay] = useState(false);
  const refAudio = useRef();

  return (
    <div className={styles.wrapper}>
      <div className={styles.image1}>
        <Image src={`${DIGIFIZZY_S3}/13/images/2728_right.png`} width={960} height={1497} />
      </div>
      <a href="https://twitter.com/Swagtimus" target="_blank">
        <div className={styles.image2}>
          <Image src={`${DIGIFIZZY_S3}/13/images/2728_image1.png`} width={298} height={298} />
        </div>
      </a>
      <a href="https://twitter.com/LoroMasnah" target="_blank">
        <div className={styles.image3}>
          <Image src={`${DIGIFIZZY_S3}/13/images/2728_image2.png`} width={185} height={185} />
        </div>
      </a>
      <div className={styles.image4}>
        <Image src={`${DIGIFIZZY_S3}/13/images/2728_image3.png`} width={304.5} height={406} />
      </div>
      <div className={styles.image5}>
        <Image src={`${DIGIFIZZY_S3}/13/images/2728_image5.png`} width={305} height={406} />
      </div>
      <div className={styles.image6}>
        <Image src={`${DIGIFIZZY_S3}/13/images/2728_image4.png`} width={304.5} height={406} />
      </div>
      <div className={styles.text1}>swagtimus</div>
      <div className={styles.text2}>ZKs x Starkware</div>
      <div className={styles.text3}>ZKs x Starkware</div>
      <div className={styles.text4}>ZKs x Starkware</div>

      <div className={styles.text5}>
        How does web3 and especially ZK scaling solutions improve the ergonomics, the human
        experience, of networked self sovereign activity of many kinds?
      </div>
      <div className={styles.text6}>
        ZK Rollups aren't just enabling cheap and fast transactions, they bring much more to the
        table. One such feature is something called account abstraction. Account abstraction allows
        for self custody without all the clunky pesky stuff like remembering seed phrases. It's the
        best of both worlds - being in complete control of your funds with a slick UX.
      </div>
      <div className={styles.text7}>
        Can systems that don't respect user needs and self ownership really be said to be serving
        good UX?
      </div>
      <div className={styles.text8}>
        That's a great way to frame that question. And imo, no, it can not. Crypto operates under
        very different assumptions compared to some web2 app - we're in the most adversarial
        conditions possible where a simple misclick can cost you fortunes. It is thus imperative to
        smooth out the UX without neglecting the core ethos of crypto - self sovereignty.
      </div>
      <div className={styles.text9}>ZK is a fascinating subject, what got you into it?</div>
      <div className={styles.text10}>
        Indeed! I've been spending a lot of time in 2019 reading about Ethereum and its scalability
        roadmap, through which I discovered the concept of rollups. That was an incredibly exciting
        time seeing and reading all these mechanics, but now seeing them live and in prod feels
        super good.
      </div>
      <div className={styles.text11}>
        Do you have any favourites among all of the different L2 ZK solutions starting to emerge?
      </div>
      <div className={styles.text12}>
        It's very hard to pick favorites. All of the ZK rollup teams are bringing something unique
        to the table and giving it their best. Aztec should be commended for focusing on privacy,
        zksync wants to save all of us from fees with their approach on being EVM-compatible, and
        others such as StarkNet are pushing the boundaries of what you can do with a more advanced
        language like Cairo. If I had to pick, it'd be StarkNet, but I'm quite obviously biased!
      </div>
      <div className={styles.text13}>
        Do you think we are getting close to a watershed moment when a decisive number of people
        really get why transaction information and creative independence are essential for a human
        centered web and broader socio economic systems?
      </div>
      <div className={styles.text14}>
        It's super hard to predict something like this, and I don't know if we'll get such a
        watershed moment. What I do know is that at some point - maybe a year from now, maybe 2
        years, maybe 5 or 10 years from now - where gradually more and more people really "get" why
        building and maintaining these credibly neutral systems is so incredibly important. I would
        hate for that to be ushered in by a huge crisis though.
      </div>
      <div className={styles.text15}>masnah</div>
      <div className={styles.text16}>
        <b>What got you into street art? What's special to you about it?</b>
        <br />
        <br />I guess I have painted walls since I was a child all over my house, later as a
        teenager is when I fell in love with wondering the streets of different cities and leaving
        my art, the memories that I kept from all those nights out and how the public creates their
        own memory about the work you do , that dialogue I wold have to say is the most special
        aspect of street art to me.
      </div>

      <div className={styles.text17}>
        <br />
        <br />
        <b>
          How'd you start getting more involved with NFTs and what was the "ah-ha" moment where you
          realised the connection between this new tech and creating more access for street art?
        </b>
        <br />
        <br />
        Early 2021 I started getting into the space, I really liked the crypto punks , the
        aesthetics and the whole story behind them ,as I saw people do derivatives of the punks I
        had the idea of doing "street punks" a series of my interpretations of crypto punks on the
        streets, this work got a lil traction and I joined the crypto punks discord starting
        communicating with the holders , I noticed some of the holders liked the project , and
        finally got commissioned to create one in NYC. From there on it was like a snowball, next
        Cryptopainter a OG ape holder started commissioned me to do his bored ape. In the folowing
        months these murals became popular in twitter and I realized how mush power a picture of the
        pops in real life had as a onboarding tool for outsiders and as a community tool that
        brought people together inside the space Months later I created Another Flex on the Wall, by
        painting a wall in a central part of Brooklyn and involving different pfp communities it
        became a wall that now represents the space
        <br />
        <br />
        <b>Are there any cool projects that you're working on?</b>
        <br />
        <br />
        Another flex on the wall would be a project I would have to highlight, I think its so
        amazing to mint graffiti!
      </div>
      <div className={styles.text18}>
        <b>
          Any tips that you can share with other artists, particulary street artists, that want to
          get more involved with NFTs but don't know where to start?{' '}
        </b>
        <br />
        <br />I would suggest to really study the technology and try to bridge it with your art ,
        there’s a lot of conceptual space yet to be explored.
      </div>
    </div>
  );
};

export default Page2728;
