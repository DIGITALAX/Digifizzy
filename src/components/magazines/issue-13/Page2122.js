import React from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page2122.module.scss';

const Page2122 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image1}>
        <Image src={`${DIGIFIZZY_S3}/13/images/2122_back.png`} width={1920} height={1497} />
      </div>
      <div className={styles.text1}>
        Cryptography
        <br />
        in
        <br />
        Brief
      </div>
      <div className={styles.text2}>
        Cryptography
        <br />
        in
        <br />
        Brief
      </div>
      <div className={styles.text5}>The 101</div>
      <div className={styles.text3}>
        Cryptography is a technique for protecting information and communication by converting it
        into a series of codes that only the intended recipients can understand and process.
        <br />
        <br />
        An encrypted message in which alphabetical letters are replaced with some characters is one
        of the best examples of basic cryptography.
        <br />
        <br />
        To decode the encrypted contents, rules defining how alphabetical letters are transposed are
        required.
        <br />
        <br />
        Grids or tabular formats can be used to represent these rules. Ciphers are another name for
        them.
        <br />
        <br />
        Ciphers can be as simple as translation codes or as complex as complex algorithms. Because
        computers can perform billions of calculations per second, these Ciphers could be broken in
        seconds. Modern cryptography advancements include the development of encryption techniques
        that are difficult to break even with supercomputers.
      </div>
      <div className={styles.text4}>
        The term "Cryptography" is derived from the Greek word “Kryptos” which means hidden.
        <br />
        The prefix "crypt-" denotes "hidden" or "vault," while the suffix "-graphy" denotes
        "writing."
        <br />
        Most early civilizations appear to have used cryptography to some extent.
        <br />
        <br />
        Simple cryptographic techniques were known to exist in antiquity – the most fundamental type
        of cryptography, substitution of symbols, appears in writings from both Egypt and
        Mesopotamia. The earliest known example of this type of cryptography was discovered in the
        tomb of Khnumhotep II, an Egyptian noble who lived around 3,900 years ago. The goal of
        symbol substitution in the Khnumhotep inscription was to improve its linguistic appeal, not
        to conceal information. Around 3,500 years ago, a Mesopotamian scribe used cryptography to
        conceal a formula for pottery glaze, which was used on clay tablets.
        <br />
        <br />
        Cryptography was widely used to protect important military information by later periods of
        antiquity, and it still serves that purpose today. Messages were encrypted in the Greek
        city-state of Sparta by being written on parchment and laid over a cylinder of a specific
        size, rendering the message indecipherable until the recipient wrapped it around a similar
        cylinder. Similarly, coded messages were used by spies in ancient India as early as the 2nd
        century BC.
      </div>
    </div>
  );
};

export default Page2122;
