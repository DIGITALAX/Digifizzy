import React from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page1314.module.scss';

const Page1314 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftImage}>
        <Image src={`${DIGIFIZZY_S3}/13/images/1314_back.png`} width={1920} height={1497} />
      </div>
      <div className={styles.text1}>Open Source Oasis</div>
      <div className={styles.text2}>
        <b>Essential Eth</b>
        <br />
        If you ever studied programming in a formal school or class setting, one thing you’ll
        probably remember is how many times the teacher or professor repeated “complete it in as
        least lines as possible”. Good coding isn’t just about articulating to the
      </div>
      <div className={styles.text3}>
        machine what you want it to do, but moreso, it’s about doing it in the most succinct and
        efficient way that you can. The smaller and cleaner, the better. Essential Eth has taken
        those same principles to form the tiniest JS Library— a TypeScript package for Ethereum and
        EMV chains in the smallest code possible. It is an alternative to web3 and ethers.js when
        bundle size matters (pretty much every frontend).
      </div>
      <div className={styles.text4}>L i b r e S o f t w a r e</div>
      <div className={styles.text5}>
        <b>LAYER2 PLANET</b>
        <br />
        At DIGIFIZZY, we fully grok L2s— they represent more than just scaling solutions for
        Ethereum. They’re our entry points for rapidly decentralising and opening up access so that
        anyone that chooses to come into this space can, without a second thought on needing
        hundreds of dollars just to join the chain. L2 Planet is spreading the adoption of this
        message with their local newsletter about L2 solutions. They cover everything from the
        fundamentals of L2 to information on the latest developments so you too can grok harder.
      </div>
      <div className={styles.text6}>L i b r e S o f t w a r e</div>
      <div className={styles.text7}>L i b r e S o f t w a r e</div>
      <div className={styles.text8}>
        <b>Just Cause</b>
        <br />
        Leveraging DeFi for public goods. Just Cause let’s users create and contribute to JustCause
        Pools that each represent a cause in need of funding. Contributors then deposit tokens into
        the pools, which in turn deposit them into Aave’s lending protocol. The interest earned is
        donated to the cause associated with that pool. When Contributors need access to their
        funds, they simply withdraw their original deposit and the interest accrued is left behind
        for the cause. They currently have an early proof of concept dapp running on Polygon Mumbai
        testnet, and we can’t wait for this protocol to launch on mainnet as an entirely new “set
        and forget” public goods initiative.
      </div>
      <div className={styles.text9}>L i b r e S o f t w a r e</div>
      <div className={styles.text10}>L i b r e S o f t w a r e</div>
      <div className={styles.text11}>
        <b>LISO</b>
        <br />
        Liso is an open-source data management application that combines a crypto wallet with
        advanced file routing, making it almost impossible for anyone to leak or sell your data.
        Think of 1Password, in a decentralised manner, where Liso uses a powerful decentralized
        network of computers to route your files. There’s no data logging, no KYC, phone number or
        email needed to create a Vault and the ability to use the app in entirely offline mode for
        extra security. You even have the option to choose your provider: IPFS, Sia, Storj, and
        Skynet.
      </div>
      <div className={styles.text12}>O p e n W e b</div>
      <div className={styles.text13}>
        <b>impactdao</b>
        <br />
        The DAO of DAOs of DAOs of DAOs. Effective sub-
      </div>
      <div className={styles.text14}>
        daoing for cultivating greator cross collaboration and impact between communities, in an
        entirely composable and fluid manner, isn’t you’re typical Sunday evening dinner
        conversation amongst friends.
        <br />
        <br />
        Yet, this is exactly what ImpactDAO is working on— forming stronger rails for DAOs to be
        able to effectively share knowledge, co-create and funnel impact driven talent between
        projects.
        <br />
        <br />
        It’s all too often that we hear a group of internet frenz getting together, creating a
        shared discord and slapping the DAO nametag on whatever they are doing. Not to say that in
        some cases the serendipidous nature of these actions haven’t led to highly innovative
        project outputs, however, there are also too many cases where it only degrades the true
        meaning of what a DAO actually is— and when done right, what they unlock at global economic,
        cultural and technical scales.
        <br />
        <br />
        Through their initiative Impact DAO hopes to claim back what it means to be a real DAO, and
        why removing siloes is the best way to go about it.
      </div>
      <a href="https://twitter.com/dawsonbotsford" target="_blank">
        <img src={`${DIGIFIZZY_S3}/13/images/1314_image1.png`} className={styles.image1} />
      </a>
      <a href="https://twitter.com/layer2planettr" target="_blank">
        <img src={`${DIGIFIZZY_S3}/13/images/1314_image2.png`} className={styles.image2} />
      </a>
      <a href="https://twitter.com/JustCauseDev" target="_blank">
        <img src={`${DIGIFIZZY_S3}/13/images/1314_image3.png`} className={styles.image3} />
      </a>
      <a href="https://twitter.com/Liso_Vault" target="_blank">
        <img src={`${DIGIFIZZY_S3}/13/images/1314_image4.png`} className={styles.image4} />
      </a>
      <a href="https://twitter.com/Impactdao_" target="_blank">
        <img src={`${DIGIFIZZY_S3}/13/images/1314_image5.png`} className={styles.image5} />
      </a>
    </div>
  );
};

export default Page1314;
