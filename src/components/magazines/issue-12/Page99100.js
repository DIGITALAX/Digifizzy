import React from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page99100.module.scss';

const Page99100 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageBackground}>
        <Image src={`${DIGIFIZZY_S3}/11/images/99100_background.jpg`} width={1920} height={1497} />
      </div>
      <div className={styles.image1}>
        <Image src={`${DIGIFIZZY_S3}/12/images/7778_image1.png`} width={147} height={147} />
      </div>
      <div className={styles.image2}>
        <Image src="/images/logo.jpg" width={147} height={147} />
      </div>
      <div className={styles.image3}>
        <Image src={`${DIGIFIZZY_S3}/12/images/7778_image1.png`} width={147} height={147} />
      </div>
      <div className={styles.image4}>
        <Image src="/images/logo.jpg" width={147} height={147} />
      </div>
      <div className={styles.image5}>
        <Image src={`${DIGIFIZZY_S3}/12/images/7778_image1.png`} width={147} height={147} />
      </div>
      <div className={styles.image6}>
        <Image src="/images/logo.jpg" width={147} height={147} />
      </div>
      <div className={styles.image7}>
        <Image src={`${DIGIFIZZY_S3}/12/images/7778_image1.png`} width={147} height={147} />
      </div>
      <div className={styles.image8}>
        <Image src="/images/logo.jpg" width={147} height={147} />
      </div>
      <div className={styles.image9}>
        <Image src={`${DIGIFIZZY_S3}/12/images/7778_image1.png`} width={147} height={147} />
      </div>
      <div className={styles.image10}>
        <Image src="/images/logo.jpg" width={147} height={147} />
      </div>
      <div className={styles.text1}>
        This month DIGITALAX, GDN & Heat went live with the first fashion movement NFT Auction
        collection.
      </div>

      <div className={styles.rect1} />
      <div className={styles.text2}>
        The collection was inspired by the Holy Mountain film, and mixed together real time motion
        capture with 3D digital fashion.
        <br />
        <br />
        What was really interesting about this collaboration was the opportunity to infuse a more
        instant and tangible emptional feel to bodies and garments in motion.
        <br />
        <br />
        As motion capture technology continues to develop, not only does the rich detail of what is
        recognised and made possible get enhanced in the technical and user experience layers by a
        full 6 degrees of freedom.
        <br />
        <br />
        But also, personal freedom is enhanced by the increasing diversity and abundance in choice
        in ownership, flexibility and beyond.
        <br />
        <br />
        This is an essential part of self sovereignty. Owning what you can do with your own physical
        movements and playing creatively with how that relates to the assets that make up everything
        from what you wear to where you are surrounded by.
      </div>
      <div className={styles.text3}>
        Check out the collection{' '}
        <a href="" target="_blank">
          here
        </a>
        .
      </div>
      <div className={styles.text4}>Toxic surrealism</div>
      <div className={styles.text5}>
        This garment was inspired by the movie “The Holy Mountain”. The mysterious, and almost toxic
        print covering the surface of the suit invites one to dive into a world filled with
        surrealism and everyone can visit it. The world that I offer you to explore allows to
        understand the wonders, infinity and charm of this universe. The promise of this is that the
        world will not let you change from the inside, but will provide you with new opportunities.
      </div>
      <div className={styles.text6}>Open your eyes</div>
      <div className={styles.text7}>
        Wearing fabric without accentuating the curves of our body like we learned to. Observing,
        protected, in harmony with ourselves.
      </div>
      <div className={styles.text8}>ISEEYOU</div>
      <div className={styles.text9}>
        Wearing fabric without accentuating the curves of our body like we learned to. Observing,
        protected, in harmony with ourselves.
      </div>
      <iframe
        className={styles.video1}
        src={`https://www.youtube.com/embed/yGuv5InB6yU`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
      <iframe
        className={styles.video2}
        src={`https://www.youtube.com/embed/2bFsvfcm6es`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
      <iframe
        className={styles.video3}
        src={`https://www.youtube.com/embed/u9J_DiLv4vk`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
      <a href="" target="_blank">
        <div className={styles.link1}>
          <Image src={`${DIGIFIZZY_S3}/12/images/99100_image1.png`} width={136} height={136} />
        </div>
      </a>
      <a href="" target="_blank">
        <div className={styles.link2}>
          <Image src={`${DIGIFIZZY_S3}/12/images/99100_image2.png`} width={136} height={136} />
        </div>
      </a>
      <a href="" target="_blank">
        <div className={styles.link3}>
          <Image src={`${DIGIFIZZY_S3}/12/images/99100_image3.png`} width={136} height={136} />
        </div>
      </a>
      <div className={styles.line1} />
    </div>
  );
};

export default Page99100;
