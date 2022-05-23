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
        <b>DITTO LAB</b>
        <br />
        Before the NFT Boom of 2021, DeFi held the spotlight for all things mixing Ethereum, crypto
        and community. And, for much of the market, it seemed as if the NFT hype wave would be
        powered predominantly by DAPPs intertwining DeFi with
      </div>
      <div className={styles.text3}>
        NFTs. This didn’t pan out as expected, with most of the DeFi x NFT applications falling
        short of market desires compared to the likes of PFP projects and play 2 earn. Ditto might
        just be changing that however. Their protocol is bringing forth NFT future contracts where
        interested buyers of an NFT can mint or buy a Future, called a Clone. We won’t hash out all
        of the Smart Contract intricacies here, but the mechanics seem promising for bridging a new
        wave of capital, liquidity and collectors into non-fungibles.
      </div>
      <div className={styles.text4}>L i b r e S o f t w a r e</div>
      <div className={styles.text5}>
        <b>ETHGANG RECORDS</b>
        <br />
        Day by day the NFT music scene continues to grow in pace, reach and general artist driven
        enthusiasm for leaving the trad industry behind. It’s no surprise that a bunch of web3
        labels and management projects have been spinning up all over #CT. Some are certainly less
        sincere than others and copy the same extractive “agent” model as in web2.
        <br />
        <br />
        ETHGANG, however, seems to be taking a more authentic approach to the stage— they’ve been
        hosting crypto voxel music shows for web3 native artists since 2020 and allocate a large
        portion of their messaging and resources to educating upcoming web3 music explorers on the
        deeper & vital, but often brushed past, aspects of what makes web3, web3— from Ethereum, to
        IPFS & ENS.
      </div>
      <div className={styles.text6}>L i b r e S o f t w a r e</div>
      <div className={styles.text7}>L i b r e S o f t w a r e</div>
      <div className={styles.text8}>
        <b>THE TOR PROJECT</b>
        <br />
        Not a new name for many, but certainly worth the mention with all that the application has
        done for enabling stronger self sovereign infrastructure. The Tor Project’s mission couldn’t
        ring more true— to advance human rights and freedoms by creating and deploying free and open
        source anonymity and privacy technologies, supporting their unrestricted availability and
        use, and furthering their scientific and popular understanding.
        <br />
        <br />
        The network is more than just a more secure means for plugging into the internet in a world
        filled with too often malicious corporate and state surveillance, but also, a lifeline for
        those located in regions where government control through censorship and restrictions means
        even some of the most basic access that we take for granted is cut off.
      </div>
      <div className={styles.text9}>L i b r e S o f t w a r e</div>
      <div className={styles.text10}>L i b r e S o f t w a r e</div>
      <div className={styles.text11}>
        <b>ICE VISION</b>
        <br />
        If we strip back it all, blockchains are, after all, just timestamped blocks filled with
        different kinds of information about the activity between members (human or not) within a
        network. Web2 infrastructure also records this information, but it’s opaque and siloed. On a
        blockchain, the sequence is continuous and connected for all parties, and, it’s also
        completely transparent so that anyone can query the state of the network at anytime, past or
        present. Trust through transparency not illusory obfuscation.
        <br />
        <br />
        Currently, quering the state of the blockchain, through apps like Etherscan, still can be
        overwhelming and difficult for the average user. Ice Vision is a visual block explorer that
        aims to make the state more intelligible so that anyone can easily peek right under the
        hood.
      </div>
      <div className={styles.text12}>O p e n W e b</div>
      <div className={styles.text13}>
        <b>ZK BLOCK</b>
        <br />
        Despite what people might think, project set up is often
      </div>
      <div className={styles.text14}>
        what eats up most of a developers time when building a new DAPP. Often the biggest
        challenges boil down to lack of interoperable and composable integration methods of
        websockets, wallet integrations, required libraries and the latest web tech.
        <br />
        <br />
        ZK Block is proposing the first ZK Boilerplate to support and accelerate the development of
        ZK Dapps. It will include everything from support for the latest web tech such as Nextjs,
        Typescript, and Material UI for design, support for the snarkjs library for browser based
        proof generation, integration with major EVM chain wallets such ETH/Polygon, and upcoming
        ZKEVMs such as ZkSync, set up for handling compile circuits, smart contracts and testnet
        deployments and a sample ZK Dapp on Testnet for developers to play around with.
        <br />
        <br />
        This honestly couldn’t come at a better time as all things turn ZK and the next wave of web3
        engineering radically gears up to make this a not too far distant reality.
      </div>
      <a href="https://twitter.com/ditto_lab" target="_blank">
        <img src={`${DIGIFIZZY_S3}/12/images/1516_image1.jpg`} className={styles.image1} />
      </a>
      <a href="https://twitter.com/ethgang" target="_blank">
        <img src={`${DIGIFIZZY_S3}/12/images/1516_image2.jpg`} className={styles.image2} />
      </a>
      <a href="https://twitter.com/torproject" target="_blank">
        <img src={`${DIGIFIZZY_S3}/12/images/1516_image3.jpg`} className={styles.image3} />
      </a>
      <a href="https://twitter.com/icevisionxyz" target="_blank">
        <img src={`${DIGIFIZZY_S3}/12/images/1516_image4.jpg`} className={styles.image4} />
      </a>
      <a href="https://zkblock.app/" target="_blank">
        <img src={`${DIGIFIZZY_S3}/12/images/1516_image5.jpg`} className={styles.image5} />
      </a>
    </div>
  );
};

export default Page1516;
