import React from 'react'
import Image from 'next/image'
import styles from './page1112.module.scss'

const Page1112 = () => (
  <div className={styles.wrapper}>
    <div className={styles.image1}>
      <Image
        src='/magazine/9/images/1112_image1.png'
        width={214}
        height={1497}
      />
    </div>
    <div className={styles.image2}>
      <Image
        src='/magazine/9/images/1112_image2.png'
        width={199}
        height={1497}
      />
    </div>
    <div className={styles.text1}>
      Digital fashion is no longer just apparel items our virtual selves wear–they have just as much become indicators of status, clout, and the tribe you belong in, while offering a backstage pass to a universe of events, spaces, and fully immersive experiences.
      <br /><br />
      The composability of NFTs have enabled them to evolve, gain more utility, and functional value, as the cultures of the environments they inhabit develop their unique contexts. Constant tinkering and experimentation with unlockable content and nested experiences have taken NFTs to a whole new level. We’re seeing the shift from the first iteration of static NFTs towards the next step of crafting our virtual realities: leveraging composability to create complex and evolving digital items that serve more than just PFPs.
      <br /><br />
      Thanks to oracles, for instance, NFTs have gone far beyond just the static jpegs most people know about. The ability to connect NFTs to data hosted off-chain creates a multitude of tantalizing applications. NFTs have enabled creators to freely compose items with unlockable content to make the NFT significantly more valuable than ever.       
    </div>
    <div className={styles.text2}>
      Charged Particles, for instance, has developed dynamic content that allows creators to constantly add new files, tokens, and assets inside NFTs; from ERC-20 tokens, ERC-721 and ERC-1155 NFT standards, governance tokens, liquidity pool tokens, and interest-bearing tokens can all be added, providing the essential conditions for more flexibility and creative freedom. We’re seeing the potential of NFTs whose characteristics evolve subject to time or event-driven requirements, directly connected to the real and virtual worlds as they happen. 
      <br /><br />
      Sidechains like Polygon have also contributed massively to achieve complex use cases. What once were prohibitively huge barriers to entry in the form of high gas fees have significantly been reduced, allowing creators greater freedom than ever to create brand experiences and create ownables with robust features.
      <br /><br />
      The next level down the digital fashion rabbit hole is going to be exciting. Grab yourself a ticket.
    </div>
  </div>
)

export default Page1112
