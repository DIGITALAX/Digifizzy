import React from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page2324.module.scss';

const Page2324 = () => (
  <div className={styles.wrapper}>
    <div className={styles.image1}>
      <Image src={`${DIGIFIZZY_S3}/13/images/2324_back.png`} width={1920} height={1497} />
    </div>

    <div className={styles.text1}>
      The Romans may have developed the most advanced cryptography in the ancient world. The Caesar
      cypher was a well-known example of Roman cryptography that involved shifting the letters of an
      encrypted message a certain number of places down the Latin alphabet. A recipient could
      successfully decode the otherwise illegible message if they knew this system and the number of
      places to shift the letters.
      <br />
      <br />
      Until the Middle Ages, there were no significant changes or advancements in the art and
      science of cryptography.
      <br />
      <br />
      Throughout the Middle Ages, cryptography grew in importance, but substitution cyphers, such as
      the Caesar cypher, remained the standard.
      <br />
      Around 800 AD, Al-Kindi, a well-known Arab mathematician, developed a technique known as
      frequency analysis, which rendered substitution cyphers vulnerable to decryption. For the
      first time, people attempting to decipher encrypted messages had access to a systematic method
      for doing so, necessitating further advancements in cryptography in order to remain useful.
      <br />
      <br />
      In 1465, Leon Battista Alberti created the polyalphabetic cypher as a solution to frequency
      analysis technique of Al Kindi. A message is encoded in a polyalphabetic cypher using two
      distinct
    </div>
    <div className={styles.text2}>
      alphabets.
      <br />
      <br />
      The first is the original message's alphabet, while the second is a completely different
      alphabet in which the message appears after it has been encoded.
      <br />
      <br />
      Polyalphabetic cyphers, when combined with traditional substitution cyphers, greatly increased
      the security of encoded data.
      <br />
      <br />
      Al Kindi's frequency analysis technique was useless unless the reader knew the alphabet in
      which the message had been originally written.
    </div>
    <div className={styles.image2}>
      <Image src={`${DIGIFIZZY_S3}/13/images/2324_back.png`} width={654} height={510} />
    </div>
  </div>
);

export default Page2324;
