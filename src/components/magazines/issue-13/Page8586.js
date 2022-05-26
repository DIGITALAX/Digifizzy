import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page8586.module.scss';

const Page8586 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.back}>
        <Image src={`${DIGIFIZZY_S3}/13/images/8586_back.png`} width={1920} height={1497} />
      </div>
      <div className={styles.text1}>ZK in the Real World</div>
      <div className={styles.text2}>ZK in the Real World</div>
      <div className={styles.text3}>ZK in the Real World</div>
      <div className={styles.text4}>ZK in the Real World</div>
      <div className={styles.text5}>ZK in the Real World</div>
      <div className={styles.text6}>ZK in the Real World</div>
      <div className={styles.text7}>
        We’ve discussed how ZK-rollups and ZK-proofs might provide the long-awaited answer for the
        Ethereum scalability problem once and for all.
        <br />
        <br />
        They might not be the silver bullets yet – but they are indeed the most promising solution
        thus far to expand the scaling properties of smart contracts and build towards the future
        with the least amount of drawbacks strictly from the perspective of pure and unadulterated
        decentralization.
        <br />
        <br />
        Ultimately, understanding the mechanics of ZK protocols isn’t a prerequisite to see how much
        of a crucial role they will play in developing and securing the future of Ethereum.
        <br />
        <br />
        The TL;DR version of ZK-rollups is as simple as this: within rollups, everything works just
        as on the Ethereum mainnet, only cheaper, faster, transparent, and private for every user.
        <br />
        <br />
        Therefore, ZK-rollups offer existing service providers maximum flexibility to service
        providers as far as handling fees are concerned.
        <br />
        <br />
        The layer of privacy and scalability rollups inherently possess make them extremely
        adaptable to existing business models, while opening up an exciting new world of
        possibilities for novel business models altogether.
      </div>
    </div>
  );
};

export default Page8586;
