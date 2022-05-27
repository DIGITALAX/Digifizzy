import React from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page103104.module.scss';

const Page103104 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text1}>dimensional assets</div>
      <div className={styles.text2}>
        The mediums where machines operate, messages are expressed, and cultures are discovered,
        retrofit, and exchanged are measured by their dimensions.
        <br />
        <br />
        The word ‘dimension’ when used as “a portal into another dimension” lives a double life as a
        multiversal time and place. A coordinate reality. Or, one of many realms within the infinite
        open metaverse.
        <br />
        <br />
        You may have a message, printed as a design, on the fabric of physical apparel. It may be a
        single piece, limited edition, or from a mass release collection.
        <br />
        <br />
        What kind of life does it enable beyond the glances you get, protection from elements in the
        physical world, what you carry in its pockets, or a jpeg that is pretty to look at?
        <br />
        <br />
        Web3 fashion NFTs are made from composable machines to be what they do: live with you as
        dimensional assets in an open world, narrative building range of places, times, and dynamic
        relationships.
      </div>
      <div className={styles.text3}>DIMENSIONAL WORKSHOP</div>
      <div className={styles.text4}>
        AN ONGOING CURATION OF EXHIBITS OF NFTS MINTED ON THE DIGITALAX MARKETPLACES AND REALMS THAT
        SHOWCASE HOW TO MAKE IT IN WEB3.
      </div>
      <div className={styles.text5}>EXHIBIT TWO WILL BE LIVE EARLY JUNE 2022.</div>
      <video autoPlay loop muted playsInline className={styles.video}>
        <source src={`${DIGIFIZZY_S3}/13/videos/103104_video.mp4`} />
      </video>
      <div className={styles.rect1} />
    </div>
  );
};

export default Page103104;
