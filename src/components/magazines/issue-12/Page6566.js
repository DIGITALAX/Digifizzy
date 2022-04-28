import React from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page6566.module.scss';

const Page6566 = () => (
  <div className={styles.wrapper}>
    <div className={styles.back}>
      <Image src={`${DIGIFIZZY_S3}/12/images/6566_back.png`} width={1920} height={1497} />
    </div>

    <a href="https://twitter.com/TooNFT_official" target="_blank">
      <div className={styles.link1}>
        <Image src={`${DIGIFIZZY_S3}/12/images/6566_image1.png`} width={596} height={146} />
      </div>
    </a>

    <div className={styles.text1}>
      For those that don’t know, Manhwa has taken the world of online content distribution by storm.
      With originally less dialogue and more colourful and detailed pictures than the Japanese
      Manga, it has adapted extremely well to life online, particularly after the rise of mobile
      devices in everyone’s pockets.
      <br />
      <br />
      It rose sharply in popularity thanks to free access and availability throughout the internet,
      and because, for creators it offered a way to get around otherwise very strict content censors
      in South Korea.
      <br />
      <br />
      It’s no surprise that webtoons are making a major transition into web3. The format is highly
      native to decentralised and distributed instantly consumable media. Think memes, graphic
      novels and pretty much anything that would be well suited to be an NFT.
      <br />
      <br />
      Add in incredibly hyper engaged communities constantly leaping over each other to comment
      first, last and frequently, and it’s a recipe set for web3 success.
      <br />
      <br />
      TooNFT is one of the first NFT webtoon DAPPs on the scene, developed within the popular
      Toomics ecosystem. It will exist as a marketplace dedicated to webtoons as well as incorporate
      more web3 compatible community tooling overtime. Are we about to see the first webtoons DAO
      where the narrative is shaped in real time by the readers?
    </div>
    <div className={styles.text2}>
      Doubtful how decentralised this will be, but it’s nice to see the South Korean government
      taking seriously the importance of funding heavily in what it takes to build the metaverse.
    </div>
    <div className={styles.text3}>
      South Korea has committed to spend at least $186.7 million, or 223.7 billion Korean won to
      spark the ecosystem creation. Here’s hoping that they learn the lesson very soon that there is
      only one metaverse with many realms, rather than referring to it as one of our biggest pet
      peeves here at DIGIFIZZY, as a metaverse among many. As if that makes sense in any language to
      be referring to multiple internets, mutiple multiverses or multiple metaverses.
    </div>
    <div className={styles.text4}>
      There is just one big abstract Ocean with many islands, fish, grains of sand, grains of salt,
      and people just need to quit with trying to own the entirety of reality. Ngmi.
      <br />
      <br />
      Side rant aside, the South Korean government expects this new digital plan to produce at least
      40, 000 new jobs and make the country the 5th largest metaverse focused market globally. We
      expect that those numbers are on the conservative side, for the metaverse has a far more
      expansive impact on primary production and derivative wealth generation than almost anyone can
      yet imagine. It helps that the new president of South Korea campaigned on a pro crypto
      platform. Excited for what’s to come!
    </div>
  </div>
);

export default Page6566;
