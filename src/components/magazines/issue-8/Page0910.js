import React from 'react'
import Image from 'next/image'
import styles from './page0910.module.scss'

const Page0910 = () => (
  <div className={styles.wrapper}>
    <div className={styles.image1}>
      <Image
        src='/magazine/8/images/0910_image1.jpg'
        width={1920}
        height={1497}
      />
    </div>
    <div className={styles.rect1} />
    <div className={styles.rect2} />
    <div className={styles.text1}>
      It’s an existential threat to the establishment: the very same tech darlings who have now lived long enough to see themselves become the villains, the new dictators, that need to be overthrown. Epic putting the kibosh on blockchain games on Steam tells you how high their opinion is about the underlying technology and the philosophy that empowers them.
      <br /><br />
      They want no part of a technology that decentralizes the delta back to dedicated builders and users–it’s entirely antithetical to their interest. Fair enough. We can see on which side whose bread is buttered on.
      <br /><br />
      Ultimately, web3 has never been about hype, brands, and companies–it was always about supporting deserving projects and individuals. That’s what’s enabled it to exchange value on either side of the coin and participate–if not prosper–in the forthcoming new era of hypergrowth.
      <br /><br />
      It’s in this decentralized interconnectivity inspired by the cyberpunk ethos of empowering individuals with technologies that can overcome systemic, institutionalized oppression and build entire cities, nations, and new, exciting economies–all of which can be done in an immediately tangible, real way.
    </div>
    <div className={styles.text2}>
      The lack of centralization and chokepoints is the definition of Nassim Taleb’s antifragility–because of their intrinsic stability and lack of a single point of failure from the decentralized nodes that run independently from each other.
      <br /><br />
      The old web2 paradigm of concentrated market control within the hands of a few is inherently vulnerable to disruption. In systems terms, a singular system optimized for value extraction is always prone to failure because of the dependence of each point on heavily concentrated nodes. A failure in the chain of nodes leads to a spanner in the works–or the system being subject to latency or breakdown. That’s just how it works.
      <br /><br />
      On the other hand, web3 is censor-proof technology wholly divorced from the little dictators and the centralized establishments entrenched within the system. It has enabled communities of creators all over the planet to coordinate capital, know-how, and governance to create civilizations on the Tigris and Euphrates of the nascent Metaverse and participate in novel economic streams never before available to the average Joe Blow.
      <br /><br />
      Web3 posits the ultimate solution to the current network and platform arrangement, doing away with the long-entrenched control chokepoints while sharing value with the creators, users, and builders among themselves.
    </div>
  </div>
)

export default Page0910
