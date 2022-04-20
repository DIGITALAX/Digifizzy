import React from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page2324.module.scss';

const Page2324 = () => (
  <div className={styles.wrapper}>
    <div className={styles.image1}>
      <Image src={`${DIGIFIZZY_S3}/12/images/2324_image1.png`} width={960} height={1022} />
    </div>

    <div className={styles.text1}>
      The fact of the matter is, is that we’re currently in a state of flux inside the broader
      crypto culture where massive challenges in the form of subversion by VC and corporate
      interests, individuals who don’t share the same fundamental principles and visions that the
      community has long held dearly, or just by individuals that do the industry a disservice – a
      space that will eat itself without any vision apart from the bottom line.
      <br />
      <br />
      See, at the very core of web3 philosophy is the intent to fully decentralize the underlying
      technology infrastructure of the internet, unlock alpha for its purveyors, all while
      preserving the sanctity of individual privacy.
      <br />
      <br />
      But for every opportunity that the new era of web3 presents, every opening is a breach waiting
      to happen.
      <br />
      <br />
      Hence, the advent of public-key cryptography dates back to the 70s, from the ashes of the
      Nixon years and the aftermath of Watergate.
      <br />
      <br />
      Back then, cryptographic security was essentially restricted to a cabal of spooks, tech nerds,
      and private sector firms.
    </div>
    <div className={styles.text2}>
      The early 90s publication of the Cypherpunk Manifesto and subsequent arrival of the first web1
      technologies – the golden years of HTTP – and the subsequent explosion of email, e-commerce,
      and other representatives of the first generation of the nascent digital age.
    </div>
    <div className={styles.text3}>
      Billions upon billions of computer-readable data can be scoured for pennies on the dollar,
      proprietary and personal secrets alike.
    </div>
  </div>
);

export default Page2324;
