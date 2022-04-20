import React from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page34.module.scss';

const Page34 = () => (
  <div className={styles.wrapper}>
    <div className={styles.image1}>
      <Image src={`${DIGIFIZZY_S3}/12/images/34_back.png`} width={960} height={1497} />
    </div>
    <div className={styles.text1}>Zero Knowledge x CC0.</div>
    <div className={styles.text2}>
      When we look back at the key milestones in blockchain history; the first that comes to mind is
      Bitcoin, followed obviously by Ethereum, then arguably PoS, and now the latest candidate is
      Zero Knowledge Proofs for just about everything.
      <br />
      <br />
      Truly remarkable bits of math and logic, these implementations in a blockchain context allow
      for far greater scaling, throughput, privacy and so much more.
      <br />
      <br />
      But, a more interesting question is why are ZK Proofs so transformative for CC0?
      <br />
      <br />
      Well first, we have to ask: what’s the main blocker preventing the rapid scaling of CC0 in
      functional practice?
      <br />
      <br />
      CC0 recognizes and expresses the inherent rights we all have to create and share thoughts,
      speech, and content without arbitrary limits. But a long-standing inhibitor of free expression
      is the lack of clear, flexible, and portable infrastructure to make profitable use of both
      original and derivative creative work. ZK proofs, and more specifically ZK rollups in a
      blockchain context, change that.
      <br />
      <br />
      A lot of people think that CC0 means no money, but actually it brings light to a key insight
      about the reality of what money is. More than a representation of value, making money in any
      context depends on the mechanisms we use to create, transport, trade, and use value. CC0 on
      its own already helps provide substantially better conceptual and ultimately legal structures
      to defend our rights to create and make money from creativity.
      <br />
      <br />
      When combined with ZK based scaling solutions, these mechanisms bring thousands of keys for
      portable self sovereignty into every pocket.
      <br />
      <br />
      ZK Proofs make use of a kind of math that is very inexpensive to perform in one direction, and
      nearly impossible to afford in reverse. In other words, it's one way math.
      <br />
      <br />
      How exactly this works in a blockchain context is covered in more detail in other parts of
      this issue of DIGIFIZZY. Skip to the end for part two.
    </div>
    <div className={styles.text3}>- Emma-Jane MacKinnon-Lee</div>
    <div className={styles.text4}>contributors</div>
    <div className={styles.text5}>
      {' '}
      Emma-Jane MacKinnon-Lee <br />
      Isramae Visales <br />
      Peezy R <br />
      Victor <br />
      Haruto Inoue <br />
    </div>
    <div className={styles.text6}>
      Stan McLygin <br />
      Glitch Faced King <br />
      Cameron Sato <br />
      James Lin <br />
      Ana Rivera <br />
    </div>
    <div className={styles.text7}>
      Nouns Soup <br />
      Polynya <br />
      Hyperloot <br />
      Chroma Cats <br />
      Synth <br />
    </div>
    <div className={styles.text8}>
      Dylan Reed <br />
      Brenon jpg <br />
      Avie <br />
      Zero <br />
      Edit <br />
    </div>
    <div className={styles.text9}>
      nicooo.eth <br />
      Richie J <br />
      Vihka <br />
      ABigNeonGlitter <br />
      Ezincrypto <br />
    </div>
    <div className={styles.text10}>
      CDT.ETH <br />
      Salvino Armati <br />
      Signora Armati <br />
      Moshe Hogeg <br />
    </div>
    <div className={styles.text11}>
      David Horvath <br />
      Matt Downey <br />
      Ruby <br />
      StarkWare <br />
    </div>
    <div className={styles.text12}>
      M0d3xx <br />
      Mona Vir <br />
      p4dee_01 <br />
      Toady_Hawk <br />
    </div>
  </div>
);

export default Page34;
