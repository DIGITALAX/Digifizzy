import React from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page2526.module.scss';

const Page2526 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image1}>
        <Image src={`${DIGIFIZZY_S3}/13/images/2526_back.png`} width={1920} height={1497} />
      </div>
      <div className={styles.text1}>
        During the Renaissance period, new methods of encoding information were also developed,
        including a popular early method of binary encoding invented in 1623 by the noted polymath
        Sir Francis Bacon.
        <br />
        In the 1790s, Thomas Jefferson described, but perhaps never built, a major breakthrough in
        cryptography. His cypher wheel invention included 36 rings of letters on moving wheels that
        could be used for complex encoding.
        <br />
        <br />
        This was such an advanced concept that it would serve as the foundation for American
        military cryptography until the end of World War II.
        <br />
        <br />
        During World War II, the Enigma machine would be the perfect example of analogue
        cryptography. This Axis device, like the wheel cypher, used rotating wheels to encode a
        message, making it nearly impossible to read without another Enigma.
        <br />
        The earliest computer technologies were eventually employed to crack the Enigma cypher. To
        this very day, the success with which the Allies were able to decrypt the Enigma cypher
        remains venerated by the victors as a critical component of their eventual victory.
        <br />
        The 21st century heralded the advancement of cryptography far beyond its analogue
        counterpart. Many sensitive devices and computer systems now use
      </div>
      <div className={styles.text2}>
        128-bit mathematical encryption, which is far more powerful than any ancient or medieval
        cypher.
        <br />
        Beginning in 1990, computer scientists were working on an entirely new type of cryptography
        known as quantum cryptography in the hopes of increasing the level of security provided by
        modern encryption.
        <br />
        Cryptographic techniques have recently been used to make cryptocurrencies possible.
        Cryptocurrencies use advanced cryptographic techniques such as hash functions, public-key
        cryptography, and digital signatures. These methods are primarily used to secure data stored
        on blockchains and to authenticate transactions. An Elliptical Curve Digital Signature
        Algorithm (ECDSA) is a type of cryptography that forms the basis of Bitcoin, Ethereum and
        other cryptocurrency systems in order to provide additional security and ensure that funds
        are only used by their rightful owners.
        <br />
        Cryptography has advanced significantly over the last 4,000 years, and it is unlikely to
        slow down anytime soon. Cryptography will continue to advance as long as sensitive data
        needs to be protected. Although the cryptographic systems used in cryptocurrency blockchains
        today are among the most advanced, they are also part of a long tradition.
      </div>
    </div>
  );
};

export default Page2526;
