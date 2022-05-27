import React from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page0910.module.scss';

const Page0910 = () => (
  <div className={styles.wrapper}>
    <div className={styles.background}>
      <Image width={1920} height={1497} src={`${DIGIFIZZY_S3}/13/images/0910_back.png`} />
    </div>
    <div className={styles.text1}>
      approve and verify transactions performed through dApps, therefore disconnecting the control
      over supply from that of control of the network.
    </div>
    <div className={styles.text2}>
      The beauty of PoW, however, lies in its resistance against a 51% attack. That’s because
      validators can’t just slurp the dip to buy as much Ethereum as possible to gain total control
      of the network – the consensus mechanism was built to withstand such attacks.
    </div>
    <div className={styles.text3}>
      But that same benefit is what has led to network congestion and extremely high fees during
      peak periods – leading to the criticism that the network just isn’t usable or scalable at all.
      <br />
      <br />
      The more computationally-heavy processes run on Layer 1, the worse it clogs up the network,
      rendering transactions unbearably slow and expensive.
      <br />
      <br />
      That is, of course, until the arrival of Ethereum 2.0 (wen doe?) and its imminent and
      long-awaited transition from a proof-of-work consensus mechanism to a proof-of-stake consensus
      mechanism – and with it, the potential ultimate scaling solution for Ethereum: Zero-Knowledge
      Rollups (ZK-rollups) and Zero-Knowledge Proofs (ZK-proofs).
      <br />
      <br />
      In theory, ZK-rollups and ZK-proofs allow transactions bundled together off-chain in a more
      efficient, faster, and privacy-first method, allowing devs, builders, and users alike to use a
      fully transparent and public Layer 1 blockchain like Ethereum or Bitcoin at a much larger
      scale, allowing significantly improved performance, throughput, and privacy.
      <br />
      <br />
      Rollups work by performing transactions outside of the Layer 1 blockchain, and then sending
      data from the transactions back to it. Rollups allow increased scalability, while offering
      security and privacy provided by Ethereum’s consensus mechanism.
    </div>
    <div className={styles.text4}>
      Moving computational processes off-chain allows the blockchain to process more transactions
      since not every piece of information from the transaction needs to fit Ethereum’s blocks, for
      instance. Once the data is processed, it is compressed and “rolled up” to the Layer 1 chain
      from the second layer in which the off-chain computation was performed – hence the name.
      <br />
      <br />
      Most scaling solutions are require complex hardware and software requirements – thus,
      oftentimes, it takes some time for their network effects to trickle down to the base layer.
    </div>
  </div>
);

export default Page0910;
