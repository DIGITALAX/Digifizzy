import React from 'react';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page1920.module.scss';

const Page1920 = () => (
  <div className={styles.wrapper}>
    <div className={styles.rect1} />
    <div className={styles.rect2} />

    <img src="./magazine/7/images/1920_image1.png" className={styles.image1} />
    <img src={`${DIGIFIZZY_S3}/12/images/1920_image1.png`} className={styles.image2} />

    <h1>
      RUG
      <span className={styles.impact1}>PULLS </span>
      <span className={styles.impact2}>&</span>
      <span className={styles.impact3}> SCAMS</span>
    </h1>

    <div className={styles.text1}>user experience for what.</div>
    <div className={styles.text2}>Is it really about the human experience?</div>
    <div className={styles.text3}>
      web2 and web3 UX is not the same. In fact, web2 failed catastrophically to ahere to pro-human
      standards.
    </div>
    <div className={styles.text4}>The User Xperience RugPull</div>
    <div className={styles.text5}>
      Can systems that don't respect user needs and self ownership really be said to be serving good
      UX? Barrels of ink have been spilt, proverbial shots have been fired, as web2 acolytes whine
      about the lack of good UX in web3. There’s some truth to these complaints, like a broken
      timepiece twice a day.
      <br />
      <br />
      Admittedly good UX is early and often lacking in web3 interfaces from the traditional
      perspective. Expectations in web3 around how much time it takes to retrieve data that is
      stored within immutable ledgers, has been verified as not being tampered with along the way,
      and is fully understandable to a novice user base unfamiliar with the relatively new practice
      of actually safeguarding our property and social interactions in ways that have never before
      been possible for us, certainly don’t match up with the seeming speed and clarity with which
      more suspect pixels can be delivered to glowing screens in web2. What’s overlooked is the
      nature of this new medium.
    </div>
    <div className={styles.text6}>
      When considering the design of systems made for human use and interaction, the most practical
      starting point is to ask: “What intention or purpose is this particular action, and the sum of
      all actions within this product, mechanism, or program trying to advance and serve?”
      <br />
      <br />
      In web2, the field of UX dedicated to the fine tuning of software interfaces for optimal
      results has become, to be frank, distressingly lazy. The intent of interfaces is blurred at
      best between virtue signaling the idea of serving the engagement or stoking of reactions from
      users and the profit optimization at the expense of all other considerations that web2
      startups and big tech are exclusively locked into, on a kind of inertial autopilot.
      <br />
      <br />
      Because of the advertising model of selling user data as products for ever more dark pattern
      based, addiction and manipulation generative targeting algorithms, the interests of users are
      completely at odds in web2 with the interests of the platforms and services that otherwise
      pretend to be driven by making life simpler, quicker, and more powerful for the billions of
      people who have become dependent on them for navigating every essential aspect of our day to
      day. We are cattle in this system, not customers.
      <br />
      <br />
      Delivery of pixels in a timely manner doesn’t actually translate to good UX. Streamlining the
      path to intended action in systems built with full respect for human centered design does.
      Web2 interfaces have failed this test of ergonomics miserably.
    </div>
    <div className={styles.text7}>
      Digital machines require digital inputs, knobs, and dials to operate through intuitive
      interfaces. For that, it’s often enough to mimic physical elements of industrial design in a
      flat 2d graphical context. Networked machines that encode, exemplify, defend and amplify the
      self-sovereignty of users and beneficiaries of their products require something more.
      <br />
      <br />
      So what’s the alternative?
      <br />
      <br />
      Web3 could definitely use more love from human centered designers and pixel pushers in the
      more obvious ways, from user onboarding to familiarisation with critical practices of basic
      information security, but when it comes to alignment of user interests with streamlining the
      paths to intended action and direct user oriented benefits, web3 already delivers with flying
      colors. It turns out, when it comes to platform profitability and user interests alike,
      incentives matter. Replacing the advertising model with direct p2p networks of value
      generation and exchange on its own creates a massive improvement in overall UX.
      <br />
      <br />
      The right question to ask from here on out is how we can do even better delivering functional
      self-sovereignty to and between users of decentralised networks by continuing to streamline
      speed of information retrieval, end to end interface and transmission security, scalability,
      and practicality of understanding in how to actually use web3 systems.
    </div>
  </div>
);

export default Page1920;
