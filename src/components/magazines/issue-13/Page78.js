import React from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page78.module.scss';

const Page78 = () => (
  <div className={styles.wrapper}>
    <div className={styles.background}>
      <Image width={1920} height={1497} src={`${DIGIFIZZY_S3}/13/images/0708_back.png`} />
    </div>
    <div className={styles.text1}>Grokking Zero Knowledge</div>
    <div className={styles.text2}>by peezy</div>
    <div className={styles.text3}>
      Haven’t we all complained about outrageous gas prices at one time or another?
      <br />
      <br />
      Not just those derived from fossil fuels, but also those coming from using the Ethereum
      network, say, to mint them jpegs or finalizing DeFi transactions.
      <br />
      <br />
      The issue of scalability has long been the chink in Ethereum’s armor.
      <br />
      <br />
      Blockchains that employ the decentralized proof-of-work (PoW) consensus mechanism - as Bitcoin
      and Ethereum do - simply cannot go any higher than their relatively meager throughput.
    </div>
    <div className={styles.text4}>
      Thus, for the longest time, Ethereum has been trying to move heaven and earth to address the
      ultimate industry-wide solution to the scalability problem that has proven to be as elusive as
      Jimmy Hoffa.
      <br />
      <br />
      PoW requires tremendous computational power to
    </div>
  </div>
);

export default Page78;
