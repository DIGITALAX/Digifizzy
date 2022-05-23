import React from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page9596.module.scss';

const Page9596 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageBackground}>
        <Image src={`${DIGIFIZZY_S3}/12/images/9394_back.png`} width={1920} height={1497} />
      </div>
      <div className={styles.text1}>FASHION FOR THE METAVERSE</div>
      <div className={styles.text2}>WEB3 FASHION and composability</div>
      <div className={styles.text3}>
        iT’S THE QUESTION THAT EVERY DESIGNER ASKS— WHERE DO I START AND HOW DO I GET STARTED?
        <br />
        <br />
        AND, IT’S one of the biggest priorities of the DIGITALAX protocol— building out each of the
        most essential composable elements that any designer needs to make their way in web3. it
        means more than launching a digital mini mall or just listing some fashion nfts for sale.
        <br />
        <br />
        like any designer unsatisfied with going shopping for clothing that others have made, as if
        that were as good as buying the tools, materials, thread and every other tiny part necessary
        to create their own clothing for themsleves, knows, composability matters.
        <br />
        <br />
        the more fine grained the building blocks and techniques available to you are, the more
        flexible that you can be in how well you create.
        <br />
        <br />
        So, when diving into web3 fashion, how can you make better use of composability?
        <br />
        <br />
        start by making your work into more readily useable ingredients for others.
        <br />
        <br />a mix of cc0, on-chain validation and giving people really clear samples of how you
        reached the end output does this.
      </div>
    </div>
  );
};

export default Page9596;
