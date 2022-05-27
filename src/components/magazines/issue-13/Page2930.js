import React from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page2930.module.scss';

const Page2930 = () => (
  <div className={styles.wrapper}>
    <video autoPlay muted loop className={styles.video1}>
      <source src={`${DIGIFIZZY_S3}/13/videos/2930_video.mp4`} type="video/mp4" />
    </video>
    <div className={styles.rect1} />
    <h1>SUSTAINABILITY PIONEERS</h1>
    <img src="./magazine/2/images/31_32_image.png" className={styles.imageEarth} />
    <div className={styles.middleLine1} />
    <div className={styles.middleLine2} />

    <div className={styles.image1}>
      <Image src={`${DIGIFIZZY_S3}/13/images/2930_image1.png`} width={300} height={229} />
    </div>
    <div className={styles.image2}>
      <Image src={`${DIGIFIZZY_S3}/13/images/2930_image1.png`} width={300} height={229} />
    </div>
    <div className={styles.image3}>
      <Image src={`${DIGIFIZZY_S3}/13/images/2930_image1.png`} width={300} height={229} />
    </div>
    <div className={styles.image4}>
      <Image src={`${DIGIFIZZY_S3}/13/images/2930_image1.png`} width={300} height={229} />
    </div>
    <div className={styles.image5}>
      <Image src={`${DIGIFIZZY_S3}/13/images/2930_image1.png`} width={300} height={229} />
    </div>
    <div className={styles.image6}>
      <Image src={`${DIGIFIZZY_S3}/13/images/2930_image1.png`} width={300} height={229} />
    </div>

    <div className={styles.text2}>
      Usually we dedicate these pages of the zine to focusing on protocols, projects and people
      advancing some novel angle towards environmental sustainability. However, when you dig deeper
      into the causes of climate, energy and natural resource impacts emerging from human activity,
      economic sustainability is really the core driver of them all.
      <br />
      <br />
      It’s fitting in this light to discuss one of the biggest crypto project collapses since Mt Gox
      and what this means for the space as a whole— Terra, UST and Kwon,
      <br />
      <br />
      By now, you’ve all probably caught up on the news or even been impacted directly. In mid May
      the worst fears for any uncollateralized stablecoin came to fruition with rapid radically
      depegging and the collapse of its paired currency.
      <br />
      <br />
      Both UST and LUNA entered a doom spiral as the vast majority of all holders ran for the exits.
      Liquidity was pulled from all directions.
    </div>
    <div className={styles.text3}>
      So, what exactly <br />
      went wrong?
    </div>
    <div className={styles.text4}>
      The main cause can easily be traced back to the massive ego and increasingly strange public
    </div>
    <div className={styles.text5}>
      behaviour of its core founder, Do Kwon. The amount of legitimate warnings that he received
      about the possible structural weaknesses and vulnerabilities of UST were insurmountable since
      launch. If you take a quick scroll through the self styled Master of Stablecoin’s twitter
      feed, you’ll see petty little ad hominem attacks against anyone who dared to question him.
      Now, just because Do Kwon has shown himself to be a total jerk in response to valid questions
    </div>
    <div className={styles.text6}>
      doesn’t mean his claims to architectural supremacy are wrong. But the total hypocrisy on
      display, where he expected to have his claims judged fairly while he ignored the merits of
      anyone else’s arguments, should have sent red flags flying everywhere. As we saw with the
      sudden collapse of UST and Luna, it turned out his claims actually didn’t have merit either.
    </div>
    <div className={styles.text7}>
      And what’s even more concerning is that the core message for UST/LUNA’s existence was that “a
      decentralised economy needs decentralised money”.
    </div>
    <div className={styles.text8}>
      A core coinciding pillar of decentralisation is transparency— and when it comes to economic
      sustainability, transparency is a feature that is entirely necessary for any project, no
      matter how big or small, to be sustained. Kwon’s project had and still has none of this.
    </div>
    <div className={styles.text9}>
      And it’s not just Kwon, it’s the entire traditional financial economy— from the never ending
      printing of evermore USD, to the total opaqueness of how the regulatory environment is
      actually meant to work for anyone, to how limited access to financial products and services
      for social mobility is for those that need it most.
      <br />
      <br />
      As we improve on more of these economic blockers to sustainability, our power to do something
      meaningful and truly mitigate the impacts of human activity on a global scale will grow
      tremendously.
    </div>
  </div>
);

export default Page2930;
