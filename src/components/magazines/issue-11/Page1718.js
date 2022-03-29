import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page1718.module.scss'

const Page1718 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.background}>
        <Image
          src={`${DIGIFIZZY_S3}/11/images/1718_background.png`}
          width={1618}
          height={1497}
        />
      </div>

      <a
        href='https://twitter.com/mattdowney'
        target='_blank'
      >
        <div className={styles.text1}>
          Matt Downey
        </div>
      </a>

      <div className={styles.text2}>
        I ran a digital agency for over a decade in the traditional Web 2.0 world. We worked with clients and partners on the cutting edge of their fields, and they introduced me to cryptocurrencies early on. It didn't click for me until I found NFTs. The potential of digital ownership and permissionless creativity was incredibly appealing — that's when it all made sense.
      </div>
      <div className={styles.text3}>
        For the past few years, I've developed a group of a few hundred creators around my personal experiences running a creative business, getting clients, finding product-market fit, productizing services, and more. The relationships I've formed here have been incredible.
      </div>
      <div className={styles.text4}>
        However, a few months ago, I realized that to amplify the concepts and ideas that will truly help them grow as creators, I'd need to build something bigger than just myself. Moving from a one-to-one model to a one-to-many approach seemed like the best way to unlock the most benefit for everyone. And on top of that, would give me a chance to practice what I preach by productizing my knowledge.
        <br /><br />
        Right now, I'm working on building content and courses that encourage participation and input from my audience. I'm also developing a private space where creators, freelancers, agency owners, and the like will be able to learn from each other's experiences — not just mine. 
        <br /><br />
        I launched my shop in January 2022 after several months of lurking and then eventually participating in the Nouns community. CrypToadz was one of the first projects I was introduced to when I started my NFT journey, and the artist behind them, Gremplin, happens to be a founding member of Nouns DAO.
        <br /><br />
        Once I started learning more about Nouns, CC0, and the thinking behind the brand, it was a no-brainer to create a shop dedicated to all things Nounish and CC0.
        <br /><br />
        I launched my shop in January 2022, and the built-in network effects of the existing Nouns brand and community made it easier to get traction right away. And now, as my participation in the Nouns community grows, so does the exposure to my shop.
      </div>
      <div className={styles.text5}>
        I don't have much experience designing and creating for fashion brands, let alone ones that include NDAs, copyright, and/or patents. But I do think there's a right way, and not-so-right way, to approach contributing to a CC0 brand.
      </div>
      <div className={styles.text6}>
        For me, it's not about taking the existing Nouns IP and slapping it on a garment. It's about being a part of a community, and as with any community, you really need to dive in to understand what it's all about.
      </div>
      <div className={styles.text7}>
        Yes, a few of the items in my store are similar to items in other stores (the IP is CC0, after all). But you'll also notice many of my products are extensions of the Nouns brand and exclusive only to my store.
      </div>
      <div className={styles.text8}>
        Things like the !vibe Hoodie, the Nounish hat, CC Zero hoodie, and the Thirty-Noun print are all concepts that stem from the community and aren't part 
      </div>
      <div className={styles.text9}>
        of the Nouns brand or IP — you'd only know their significance if you were deep in Discord or Twitter.
      </div>
      <div className={styles.text10}>
        There are certainly a lot of constraints when it comes to CC0 brands like Nouns, but I find those constraints interesting as a creative. It forces me to think differently and find new ways to design relevant items within the confines of a predetermined brand that anyone can use/claim. I love the challenge — and I know many others do too.
      </div>
      <div className={styles.text11}>
        I've been a big proponent of open source in the traditional sense for many years. Web 1.0 had open protocols, but the products were limited. Web 2.0 took those protocols, created walled gardens (think Facebook, Twitter, etc.), and the users became the data. Not great.
        <br /><br />
        Web3 appears to have taken the best of each version and created a new model. It's bringing back open protocols that allow for permissionless creation and composability across networks, data, money, and more. 
        <br /><br />
        I haven't been this excited about the future of creativity on the web in a long time.
        <br /><br /><br />
        I'm currently working on the Spring Collection coming out soon (I'm shooting for early April). In addition, I'm working on content for creators at Build Your Bridge and look to start promoting that more in the coming months. There's plenty of new stuff coming down the pike — stay tuned!
      </div>

      <div className={styles.leftSideFrame} />
      <div className={[styles.animationFrame, styles.leftSideImageWrapper].join(' ')}>
        <img src='./magazine/1/images/howtogetintext 2.png' alt='' />
        <img src='./magazine/1/images/howtogetintext 2.png' alt='' />
        <img src='./magazine/1/images/howtogetintext 2.png' alt='' />
        <img src='./magazine/1/images/howtogetintext 2.png' alt='' />
      </div>
      <div className={styles.rightSideFrame} />
      <div className={[styles.animationFrame, styles.rightSideImageWrapper].join(' ')}>
        <img src='./magazine/1/images/howtogetintext 1.png' alt='' />
        <img src='./magazine/1/images/howtogetintext 1.png' alt='' />
        <img src='./magazine/1/images/howtogetintext 1.png' alt='' />
        <img src='./magazine/1/images/howtogetintext 1.png' alt='' />
      </div>
    </div>
  )
}

export default Page1718
