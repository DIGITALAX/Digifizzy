import React from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page8788.module.scss';

const Page8788 = () => (
  <div className={styles.wrapper}>
    <div className={styles.left}>
      <Image src={`${DIGIFIZZY_S3}/13/images/8788_left.png`} width={960} height={1497} />
    </div>
    <div className={styles.right}>
      <Image src={`${DIGIFIZZY_S3}/13/images/8788_right.png`} width={960} height={1497} />
    </div>

    <div className={styles.text1}>
      Widespread adoption may accelerate since the great majority of users would no longer need to
      interact with the base layer or L1s on a regular basis through rollups, since everything is
      performed off-chain, while a series of nodes provides an abridged state update to the Ethereum
      mainnet to reflect the rollup itself. This is akin to a signature representing up to thousands
      of transactions “rolled up” within the rollup.
      <br />
      <br />
      Plenty of the knocks on Ethereum’s scaling challenges can be expected to be largely addressed
      by ZK-rollups, leading to an influx of capital returning to Ethereum – which isn’t just a drop
      in the bucket, either – that had previously moved towards faster-performing and much more
      affordable smart-chains.
      <br />
      <br />
      ZK-rollups will definitely revive DeFi from doldrums. Priced-out users who could not or would
      not transact on Ethereum’s base layer due to exorbitant gas fees will be able to participate
      even during times of increased network activity.
    </div>
  </div>
);

export default Page8788;
