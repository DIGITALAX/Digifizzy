import React from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page99100.module.scss';

const Page99100 = () => (
  <div className={styles.wrapper}>
    <div className={styles.back}>
      <Image src={`${DIGIFIZZY_S3}/13/images/99100_back.png`} width={1920} height={1497} />
    </div>

    <a href="https://digitalax.xyz/whitepaper" target="_blank">
      <div className={styles.image1}>
        <Image src={`${DIGIFIZZY_S3}/13/images/99100_image1.png`} width={275} height={429} />
      </div>
    </a>
    <a href="https://digitalax.xyz/roadmap" target="_blank">
      <div className={styles.image2}>
        <Image src={`${DIGIFIZZY_S3}/13/images/99100_image2.png`} width={391} height={266} />
      </div>
    </a>

    <div className={styles.text1}>DIGITALAX</div>
    <div className={styles.text2}>
      Open composable machines for dimensional culture unlocked by the most advanced web3 fashion
      ecosystem.{' '}
    </div>
    <div className={styles.text3}>
      DIGITALAX is now live with V3!
      <br />
      <br />
      After everything so far, DIGITALAX continues to be the most advanced and comprehensive web3
      fashion ecosystem.
      <br />
      <br />
      We build open composable machines for dimensional culture.
      <br />
      <br />
      V3 not only comprehensively expands the protocol to new heights, but also reinforces
      everything that we’ve built so far, in all dimensions.
    </div>
    <div className={styles.text4}>Read the V3 Whitepaper</div>
    <div className={styles.text5}>
      See the V3 Roadmap, from how we got here, to where we are going
    </div>
  </div>
);

export default Page99100;
