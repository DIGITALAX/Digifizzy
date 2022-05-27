import React from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page1112.module.scss';

const Page1112 = () => (
  <div className={styles.wrapper}>
    <div className={styles.background}>
      <Image width={1920} height={1497} src={`${DIGIFIZZY_S3}/13/images/1112_back.png`} />
    </div>
    <div className={styles.text1}>
      Thus far, we’ve seen L2 solutions like Bitcoin’s own Lightning Network, Polygon (Matic) and
      its PoS blockchain, Ethereum Plasma and Arbitrum, to name the most well-known ones, perform
      transactions off the base layer and transmitting validated transactions back to the main
      chain.
      <br />
      <br />
      Ultimately, once the rollup is recorded on the Ethereum ledger, the cost per
    </div>
    <div className={styles.text2}>
      transaction significantly decreases, since the gas fees are distributed across a handful of
      users whose transactions belong to the same rollup.
      <br />
      <br />
      Rollups enhance Ethereum’s throughput from a meager 15 to 45 tps (depending on operation) up
      to as much as 1000–4000 tps – a game changer for the industry as it happens.
      <br />
      <br />
      And, once Ethereum 2.0 is fully implemented, sharding, as well as its additional space for
      rollup packages provide the ability to store even larger amounts of data. This allows the
      combination of ETH 2.0 and rollups to boost transaction speed up to 100,000 tps. Imagine the
      possibilities.
      <br />
      <br />
      The concept of zero-knowledge proofs were first developed by researchers at MIT during the
      halcyon days of the 80s. By 1985, researchers Shafi Goldwasser and Silvio Micali from MIT and
      Charles Rackoff from the University of Toronto developed the first zero-knowledge proofs in a
      paper entitled “The Knowledge Complexity of Interactive Proof-Systems,” laying the groundwork
      and vision for ZK-proofs three decades later with the emergence of Ethereum.
    </div>
    <div className={styles.text3}>
      In essence, ZK-proofs are protocols wherein one party (called a “prover”) can prove the
      veracity of a given statement to another party (the “verifier”, in this case) – as true,
      without the prover having to revealing any other information apart from the veracity of the
      statement itself.
      <br />
      <br />
      In essence, ZK protocols are simply mathematical methods to verify the integrity of messages
      without revealing any underlying personal or otherwise private data.
    </div>
    <div className={styles.text4}>
      It’s akin to an app that verifies whether you have enough money in your checking account to
      perform a transaction, without revealing anything else about your personally identifiable
      information like your name or account number. Or an app that verifies the validity of your PIN
      numbers or passwords without handling it in a direct fashion.
      <br />
      <br />
      ZK-rollups and ZK-proofs are the future of Ethereum because they allow for the brokering of
      all sorts of transactions, interactions, agreements, and everything in between in a
      significantly safer, more private manner.
      <br />
      <br />
      It’s the final piece of the Ethereum scalability puzzle – and it will have far-ranging
      consequences as far as the viability of Ethereum as the pre-eminent world computer.
      <br />
      <br />
      And that’s a good thing.
    </div>
  </div>
);

export default Page1112;
