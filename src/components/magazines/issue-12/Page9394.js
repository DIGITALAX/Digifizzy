import React from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page9394.module.scss';

const Page9394 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageBackground}>
        <Image src={`${DIGIFIZZY_S3}/12/images/9394_new_back.png`} width={1920} height={1497} />
      </div>
      <div className={styles.text1}>Play Oasis</div>
      <a href="" target="_blank" className={styles.link1}>
        w/ OxSean
      </a>
      <div className={styles.text2}>
        1. Tell us more about yourself and the team. Who’s involved at PlayOasis and how did you all
        come together to bring the project to life?
      </div>
      <div className={styles.text3}>
        <br />
        <br />
        Jon and I are the cofounders of PlayOasis. We have known each other since grade school.
        <br />
        <br />I got involved in crypto in 2017 as a developer building open source and educational
        products on Product Hunt. You can see some of my projects here:
        <br />
        <a href="https://github.com/0xs34n" target="_blank">
          https://github.com/0xs34n
        </a>
        <br />
        <a href="https://www.producthunt.com/@0xs34n/made" target="_blank">
          https://www.producthunt.com/@0xs34n/made
        </a>
        <br />
        <a href="https://medium.com/@0xs34n" target="_blank">
          https://medium.com/@0xs34n
        </a>
        <br />
        <br />I first saw NFTs in the Ethereum Foundation in November 2017, where a group of
        university interns was building a marketplace exclusively for CryptoPunks. Even though I did
        not capitalize on the opportunity (sadly) to scoop up some cheap CryptoPunks, it made a deep
        impression on him. Shortly after, Cryptokitties was released and the NFT ecosystem was born.
        <br />
        <br />a
        <br />
        <br />
        Now, we are looking to bring digital ownership, community, and culture to the masses by
        lowering the barrier of entry for people to participate in the crypto ecosystem.
      </div>
      <div className={styles.text4}>
        2. In many ways, the current wave of new marketplaces springing up have had a gift-wrapped
        path handed to them by the very noticeable disappointments from earlier players like
        Opensea. What made mistakes made by early-stage pioneers can new marketplaces learn from,
        and how do we make sure it's not just another wave of decentralization early to become
        centralized experiences? What is PlayOasis doing to keep web3 native development at the
        core?
      </div>
      <div className={styles.text5}>
        OpenSea definitely paved the way for new marketplaces to follow. There are many
        considerations for new marketplaces, especially around the following tradeoffs:
        <br />
        <br />
        UX vs. Cost vs. Business Model
      </div>
      <div className={styles.text6}>
        <br />
        <br />
        I think we are figuring out what is the right balance between the tradeoffs with our
        collaborators and partners.
        <br />
        <br />
        Also, I think challenges in content moderation, fraud, and spam are challenging to solve,
        especially with lower gas fees, decentralization, and censorship resistance. Web 2.0
        companies allocate substantial resources to alleviate these challenges. We are also figuring
        out how to solve these challenges in a sustainable way.
      </div>
      <div className={styles.text7}>
        3. Building on top of a ZK solution like Starknet is quite ahead of the game. ZKs is very
        exciting but not many projects are utilizing them directly as of yet. What advantages do you
        think it gives you for growing in the market?
      </div>
      <div className={styles.text8}>
        As you said, I think there is a lot of excitement around the potential of ZK to scale
        blockchains.
        <br />
        <br />
        The scaling potential of ZK rollups seems like it would provide the best UX for our users in
        the long term. For example, the fast settlement between L2 and L1 is potentially a better
        experience compared to other scaling solutions.
        <br />
        <br />
        Also, the StarkWare team and the ecosystem are very tight-knit and collaborative, which
        makes working in this ecosystem much more enjoyable, especially since developing in Cairo,
        the StarkNet smart contract language, can be unforgiving at times.
      </div>
      <div className={styles.text9}>
        4. What are some of the more unexpected or obscure uses of ZK proofs that you are excited to
        see emerge in this next wave of decentralization?
      </div>
      <div className={styles.text10}>
        I’ve heard rumblings of adding ZK proofs to scale Bitcoin which I think is very exciting!
      </div>
      <div className={styles.text11}>
        5. Anything else that you can share about what’s upcoming with the project?!
      </div>
      <div className={styles.text12}>
        We are aiming to go on StarkNet Mainnet in the next couple of weeks or months, with upcoming
        collaborations with other projects. Stay tuned!
      </div>
      <a href="https://twitter.com/PlayOasisXYZ" target="_blank" className={styles.link2}>
        <Image src={`${DIGIFIZZY_S3}/12/images/9394_new_image1.png`} width={232} height={232} />
      </a>
    </div>
  );
};

export default Page9394;
