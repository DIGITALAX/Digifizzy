import React from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page8788.module.scss';

const Page8788 = () => (
  <div className={styles.wrapper}>
    <video autoPlay muted loop className={styles.back}>
      <source src={`${DIGIFIZZY_S3}/12/videos/8788_video1.mp4`} />
    </video>
    <div className={styles.rect1}></div>
    <div className={styles.rect2}></div>
    <div className={styles.rect3}></div>
    <div className={styles.rect4}></div>

    <div className={styles.text1}>
      Working conditions plummeted in factories as enterprising industrialists sought to cut costs
      as much as they could to stay ahead of the competition. And in spite of the relative economic
      gains, the gap between the rich and the poor, the working class and the industrialists, the
      haves and have nots, has just widened and widened centuries after the fact.
      <br />
      <br />
      For every story of economic, political, societal and cultural upheaval brought on by the first
      industrial revolution, there have been countless consequences on the systems that supported
      life as we knew it then, and pushing environmental effects to the very precipice of its
      tolerance.
      <br />
      <br />
      Nevertheless, it is now 2022 and we’re on the verge of yet another Industrial Revolution
      coming to pass as web3 takes flight – taking capital, manufacturing, production, and
      creativity traverses from the physical to the digital plane.
      <br />
      <br />
      Creators are raising capital for their NFT projects on their own smart contracts – with zero
      intermediation. Not beholden to any platform or algorithm cultism. No personal information, no
      data mined whatsoever. Every physical or digital creation tokenized and put on an immutable
      ledger, ensuring complete and total ownership. DAOs to enable the liquidity of the vast
      resources – with content, capital, contracts, and creativity in their hands.
    </div>

    <video autoPlay muted loop className={styles.video1}>
      <source src={`${DIGIFIZZY_S3}/12/videos/8788_video1.mp4`} />
    </video>

    <video autoPlay muted loop className={styles.video2}>
      <source src={`${DIGIFIZZY_S3}/12/videos/8788_video2.mp4`} />
    </video>
  </div>
);

export default Page8788;
