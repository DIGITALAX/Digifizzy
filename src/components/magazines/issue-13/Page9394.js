import React from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page9394.module.scss';

const Page9394 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageBackground}>
        <Image src={`${DIGIFIZZY_S3}/13/images/9394_back.png`} width={1920} height={1497} />
      </div>

      <div className={styles.text1}>CCO SUMMER</div>
      <div className={styles.text2}>
        We’re almost here, a few more days till the long awaited #cc0summer kicks off. We’ve seen
        explosive growth in the number of CC0 projects building on Ethereum/L2s… and the list seems
        to just keep getting longer and longer every day.
        <br />
        <br />
        One of the most exciting parts about it all is that CC0, despite what some may think, is a
        fundamental layer for the maximal acceleration, amplification and distribution of content
        and culture into as many lives as possible, which is ultimately why we create in the first
        place. Not all to get all soapboxey about it here, but copyright has ultimately failed to
        deliver on the commercial incentive part of its promised idea.
        <br />
        <br />
        Instead, it just locks down and restricts what creators and consumers can and can’t do.
        Creativity lives to be free. As we all know, in web3, thanks to NFTs, the commercial
        incentive promise can finally be realised through a full embrace of cc0.
      </div>

      <a href="https://twitter.com/tinydinosnft" target="_blank" className={styles.image1}>
        <Image src={`${DIGIFIZZY_S3}/13/images/9394_image1.png`} width={225} height={225} />
      </a>
      <a href="https://twitter.com/NounPunks" target="_blank" className={styles.image2}>
        <Image src={`${DIGIFIZZY_S3}/13/images/9394_image2.png`} width={225} height={225} />
      </a>
      <a href="https://twitter.com/f3manifesto" target="_blank" className={styles.image3}>
        <Image src={`${DIGIFIZZY_S3}/13/images/9394_image3.png`} width={225} height={225} />
      </a>
      <a href="https://twitter.com/worldofnoun" target="_blank" className={styles.image4}>
        <Image src={`${DIGIFIZZY_S3}/13/images/9394_image4.png`} width={225} height={225} />
      </a>
      <a href="https://twitter.com/larvacucks" target="_blank" className={styles.image5}>
        <Image src={`${DIGIFIZZY_S3}/13/images/9394_image5.png`} width={225} height={225} />
      </a>
      <a href="https://twitter.com/Greta_gremplin" target="_blank" className={styles.image6}>
        <Image src={`${DIGIFIZZY_S3}/13/images/9394_image6.png`} width={225} height={225} />
      </a>
      <a href="https://twitter.com/ChromaCatsNFT" target="_blank" className={styles.image7}>
        <Image src={`${DIGIFIZZY_S3}/13/images/9394_image7.png`} width={225} height={225} />
      </a>
      <a href="https://twitter.com/gnars_dao" target="_blank" className={styles.image8}>
        <Image src={`${DIGIFIZZY_S3}/13/images/9394_image8.png`} width={225} height={225} />
      </a>
    </div>
  );
};

export default Page9394;
