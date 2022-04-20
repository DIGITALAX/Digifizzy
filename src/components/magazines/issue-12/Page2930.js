import React from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page2930.module.scss';

const Page2930 = () => (
  <div className={styles.wrapper}>
    <video autoPlay muted loop className={styles.video1}>
      <source src={`${DIGIFIZZY_S3}/11/videos/2930_video1.mp4`} type="video/mp4" />
    </video>
    <div className={styles.rect1} />
    <h1>SUSTAINABILITY PIONEERS</h1>
    <img src="./magazine/2/images/31_32_image.png" className={styles.imageEarth} />
    <div className={styles.middleLine1} />
    <div className={styles.middleLine2} />

    <div className={styles.image1}>
      <Image src={`${DIGIFIZZY_S3}/12/images/2930_image1.png`} width={827} height={256} />
    </div>
    <div className={styles.image2}>
      <Image src={`${DIGIFIZZY_S3}/12/images/2930_image1.png`} width={827} height={256} />
    </div>

    <div className={styles.text1}>Sustainability in the Digital Age</div>
    <div className={styles.text2}>
      For decades now, the ever encroaching concern of impending environmental catastrophe has been
      widely ignored even while hotly debated.
      <br />
      <br />
      Sustainability has finally begun to become more than just a virtue signaling cause célèbre,
      with the direct socioeconomic, military, and personal security benefits of independence from
      fossil fuels being entirely obvious and the consequences of continue to bury our heads in the
      hopes that everything will somehow work out on its own piling far too high.
    </div>
    <div className={styles.text3}>
      But, yet, still, far too often most of the talk about sustainability is just the same circles
      repeating the same words around and around, with little new insight to be gained. Forget
      actual improvements in emissions reductions.
    </div>
    <div className={styles.text4}>
      One little talked about but actually novel way to look at sustainability is to consider the
      footprints and wasteful byproducts we leave in our digital lives.
    </div>
    <div className={styles.text5}>
      When talking about waste, we have to ask ourselves, what is it that something could be doing
      or accomplishing for us that it currently isn’t. Waste, afterall, is a matter of perspective.
      Like sawdust seen through more imaginative eyes becoming the entire charcoal industry and
      every
    </div>
    <div className={styles.text6}>
      lovely afternoon BBQ on a hot summer day that has enabled, what more could each item in our
      digital lives be doing for us?
      <br />
      <br />
      There is afterall a sizeable difference between a dress you buy and never wear, while it sits
      there taking up space in a physical closet in what is likely if you live in an urban area, far
      too cramped of an apartment, compared to an item
    </div>
    <div className={styles.text7}>
      of clothing that you actually wear physically or digitally on a regular basis.
      <br />
      <br />
      If each thing you buy
    </div>
    <div className={styles.text8}>
      literally does more for you by having more features, more functionalities embedded within it,
      the value becomes obvious and the degree to which it generates waste becomes radically reduced
      or offset entirely.
    </div>
    <div className={styles.text9}>
      It’s no longer waste if it is being used for good purpose. So what are some great examples of
      digital assets being used to great effect with near zero waste?
      <br />
      <br />
      One of the best is if you look in your pocket or your decentralised wallet, would be literally
      or figuratively whatever keys you always carry with you. What doors, offices, playgrounds,
      personal gyms, secret clubs or treasure boxes do those keys open? What music festivals do they
      get you back stage access to? Really, when we talk about sustainability in a web3 context.
      What we’ve seen so far is just barely scratching the surface of how much can be imagined to
      convert previously wasteful by products into entirely new industries of wealth generating
      network effects.
      <br />
      <br />
      And the coolest thing about it all, is that as holders of hyper useful web3 assets become more
      economically empowered to vote with our wallets for broader solutions to sustainability issues
      everywhere.
    </div>
  </div>
);

export default Page2930;
