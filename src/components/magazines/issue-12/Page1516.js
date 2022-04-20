import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page1516.module.scss';

const Page1516 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftImage}>
        <Image src={`${DIGIFIZZY_S3}/12/images/1516_left.jpg`} width={960} height={1497} />
      </div>
      <div className={styles.rightImage}>
        <Image src={`${DIGIFIZZY_S3}/12/images/1516_right.jpg`} width={960} height={1497} />
      </div>
      <div className={styles.text1}>Open Source Oasis</div>
      <div className={styles.text2}>
        <b>Geo Web</b>
        <br />
        When we think about the metaverse, gaming, blockchain, NFTs and web3, we often confine this
        reality to only existing within the digital realms. But, the metaverse and web3 are nothing
        more than the full suite of power tools that allow us
      </div>
      <div className={styles.text3}>
        to engage with every aspect of human activity in a much higher fidelity— not just in digital
        space, but also physical IRL. Geo Web is working towards enhacing the connective layer that
        interwines the open digital and physical layers through developing an augmented, shared
        reality layer that is guided by public good values rather than the corporate control of the
        computer state.
      </div>
      <div className={styles.text4}>L i b r e S o f t w a r e</div>
      <div className={styles.text5}>
        <b>Ethereum on arm</b>
        <br />
        As the rise of the sovereign individual continues to be the predominant driver of the web3
        revolution, software open access alone is wildly insufficient. Easy and affordable hardware
        access is also crtically essential.
        <br />
        <br />
        The team at Ethereum on Arm are working towards making this more of a reality, providing a
        PnP Ubuntu server image for the Raspberry Pi 4 that runs Ethereum clients as a boot System
        service and automatically turns the device into a full Ethereum 1.0/2.0 nodes. Keep
        Decentralisation.
      </div>
      <div className={styles.text6}>L i b r e S o f t w a r e</div>
      <div className={styles.text7}>L i b r e S o f t w a r e</div>
      <div className={styles.text8}>
        <b>Otterscan</b>
        <br />
        Otterscan is an open-source, fast, local, laptop-friendly Ethereum block explorer that is
        designed to be run locally with an Erigon archive node companion.
        <br />
        <br />
        Holding true to the core principles and development practices of Cypherpunk, Otterscan
        brings greater benefits for privacy, security, speed and decentralisation. Running locally
        means that you are querying your own node and thus not sending your IP address or queries to
        an external third-party node. Network roundtrips are also completely obsolete.
      </div>
      <div className={styles.text9}>L i b r e S o f t w a r e</div>
      <div className={styles.text10}>L i b r e S o f t w a r e</div>
      <div className={styles.text11}>
        <b>FileVerse</b>
        <br />
        Fileverse provides token governed tooling that makes it super easy for individuals, teams,
        communities, and DAOs, to upload, encrypt and share files with any number of ethereum
        addresses, while storing it all on decentralised data storage protocols like IPFS.
        <br />
        <br />
        Open source peer 2 peer storage offers privacy through strong encryption and requires only a
        wallet connection to work. No names, no emails and no “someone” who can censor your files.
        Exactly how it was always meant to be.
      </div>
      <div className={styles.text12}>O p e n W e b</div>
      <div className={styles.text13}>
        <b>Esteroids</b>
        <br />
        Search and rank of the web2 era has been most
      </div>
      <div className={styles.text14}>
        prominently defined by Google. Their page rank algorithm has been revolutionary to so many
        aspects of how we’ve connected and coordinated online over the past two decades. Not being
        able to efficiently and intuitively sort through piles of internet data, websites and refine
        our online rumaging to specifc keywords and topics would have made any potentiality of
        building, producing, distributing and finding much of the content, products and
        relationships we use and interact with today impossible.
        <br />
        <br />
        As we move into the metaverse and block by block replace the old centralised infrastructure
        with open ramps, it’s exciting to think what decentralised search and discovery with new
        multi-dimensional temporal-spatial coordinates will look like?
        <br />
        <br />
        Esteroids is buidling the first community search engine for amplifying .ETH and other
        decentralised websites built on ENS and IPFS. This is just the beginning, with more tooling
        soon on its way.
      </div>
      <img src={`${DIGIFIZZY_S3}/12/images/1516_image1.jpg`} className={styles.image1} />
      <img src={`${DIGIFIZZY_S3}/12/images/1516_image2.jpg`} className={styles.image2} />
      <img src={`${DIGIFIZZY_S3}/12/images/1516_image3.jpg`} className={styles.image3} />
      <img src={`${DIGIFIZZY_S3}/12/images/1516_image4.jpg`} className={styles.image4} />
      <img src={`${DIGIFIZZY_S3}/12/images/1516_image5.jpg`} className={styles.image5} />
    </div>
  );
};

export default Page1516;
