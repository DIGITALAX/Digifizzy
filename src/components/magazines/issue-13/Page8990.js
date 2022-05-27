import React from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page8990.module.scss';

const Page8990 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.back}>
        <Image src={`${DIGIFIZZY_S3}/13/images/8990_back.png`} width={1920} height={1497} />
      </div>
      <div className={styles.text1}>
        Novel dApps that require significantly cheaper transactions and faster confirmation times
        will proliferate to create entire ecosystems guaranteed by the security of Ethereum’s
        consensus mechanism as it transitions to 2.0. Anybody up for another DeFi Summer? Count us
        in.
        <br />
        <br />
        The next step is ZK-proofs, which essentially are protocols that allow you to prove you know
        a piece of private information without ever having to reveal it to any other entity.
        ZK-proofs simply prove that you are in fact telling the truth.
        <br />
        <br />
        ZK-proofs work with the verifier asking the prover to perform actions that can only be done
        if the prover knows a secret without any shadow of a doubt. If you, as the prover, are
        simply brute-forcing a secret, you will be proven wrong by the verifier and its series of
        tests.
        <br />
        <br />
        If you know the data that the verifier is looking for, you WILL pass every test every single
        time without ever having to reveal anything about it. It’s like telling your bank or
        financial institution to complete a PIN or a secret phrase to verify your identity – you’re
        not being asked about how much your bank account contains, but only demonstrating the fact
        that you know the data that the bank is asking for.
      </div>
      <div className={styles.text2}>
        And in order for Ethereum and similar public blockchains to unlock their full potential as a
        technology, data privacy is a non-negotiable. No serious financial institution, bank, or
        service provider will work with a public blockchain if every single piece of information is
        out there in the open for the world to see. Otherwise, they would just create their own
        private blockchains with their own privacy layers and ditch the clunky, public, and
        decentralized ones altogether.
        <br />
        <br />
        There are plenty of real-life implications surrounding ZK-proofs and their usage in
        blockchain – but perhaps the most salient one is the enhanced perception of privacy,
        security, and trust.
        <br />
        <br />
        For instance, ZK-proofs possess tantalizing potential for financial reporting and auditing
        as regulation, competition, and the importance of boosting confidence and trust in the
        financial markets constantly evolve alongside requirements. ZK-proofs open up the
        possibility of streamlining and reducing oftentimes bloated audit workflows, allowing
        professionals in the space to focus on the business of analyzing data.
        <br />
        <br />
        ZK-proofs, in the realm of financial reporting, can prove the veracity of a particular
        computation, without revealing any personally identifiable information or otherwise
        information that shouldn’t be kept public. Therefore, if a client can prove to an audit that
        their books have been balanced correctly, ZK-proofs might be able to automate the
        verification of entries, which is a core aspect of every financial report.
        <br />
        <br />
        We’ve barely scratched the surface of what ZK-proofs and rollups can do on the Ethereum
        network. ZK-proofs might just deliver the answers industries across the board are looking
        for, regardless of whether the environment is centralized or decentralized. Watch this
        space.
      </div>
    </div>
  );
};

export default Page8990;
