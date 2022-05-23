import React from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { DIGIFIZZY_S3 } from '@constants/urls';
import NoUnlockPage from '../common/NoUnlockPage';
import styles from './page105106.module.scss';

const Page105106 = () => {
  const router = useRouter();
  const { slug } = router.query;
  const issueId = slug && slug.length > 0 ? slug[0] : magazineIssues[0].issueId;
  const { contentUnlocked } = useSelector((state) => state.global.toJS());

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageBackground}>
        <Image src={`${DIGIFIZZY_S3}/12/images/103104_back.png`} width={960} height={1497} />
      </div>
      <div className={styles.text1}>Freeing Capacity Part 2.</div>
      <div className={styles.text2}>
        When any single or small group of powers is able to gain control of who has access to a
        powerful technology and how it can be used, the radical increases in capacity offered by
        these advances can become instead vast repositories of information secretly collected and
        stored in order to keep a populous in check or means of mass distribution for disinformation
        and propaganda.
        <br />
        <br />
        The natural counter to this is the wide spread distribution and decentralisation in not just
        know-how in using these technologies but the creative ingenuity required to break them down
        and build them up from scratch.
        <br />
        <br />
        Knowing how these systems tick and how to maintain, tinker with, deconstruct and advance
        them ourselves is the most critical aspect of what determines whether a particular
        technology advance has a broadly positive or negative impact on humanity.
        <br />
        <br />
        So, how does blockchain fit into this and what does it really do for us?
        <br />
        <br />
        Quite simply, it is the most direct technology advancing our precise ability to coordinate
        socially and yet fully voluntarily and independently.
        <br />
        <br />
        Because of the sequential nature of consensus validated time stamps, the number of previous
        nearly impossible to account for question marks and expenses that have become now simple to
        resolve (through layer 2s, ZKs and all of the rest), the fluidity of navigating points of
        social conflict and opportunity becomes the most important aspect of the game itself.
        <br />
        <br />
        Congratulations on one year of DIGIFIZZY! Many more to come!
      </div>
      <div className={styles.text3}>- Emma-Jane MacKinnon-Lee</div>

      {!contentUnlocked && <NoUnlockPage issueId={issueId} />}
    </div>
  );
};

export default Page105106;
