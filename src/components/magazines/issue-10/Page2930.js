import React from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page2930.module.scss'

const Page2930 = () => (
  <div className={styles.wrapper}>
    <video autoPlay muted loop className={styles.video1}>
      <source
        src={`${DIGIFIZZY_S3}/10/videos/2930_video1.mp4`}
        type='video/mp4'
      />
    </video>
    <div className={styles.rect1} />
    <h1>SUSTAINABILITY PIONEERS</h1>
    <img
      src='./magazine/2/images/31_32_image.png'
      className={styles.imageEarth}
    />
    <div className={styles.middleLine1} />
    <div className={styles.middleLine2} />

    <div className={styles.climateText1}>
      NFTS As Drivers of Sustainability.
    </div>
    <div className={styles.climateText2}>
      NFTS As Drivers of Sustainability.
    </div>
    <div className={styles.climateText3}>
      NFTS As Drivers of Sustainability.
    </div>
    <div className={styles.climateText4}>
      NFTS As Drivers of Sustainability.
    </div>
    
    <div className={styles.text1}>
      Fashion NFTs are becoming more and more popular as of just the past 2-3 months, as buyer and collector DAOs focused specifically on the sector form, larger legacy players experiment in the space, and, with the highest potentiality, the indie web3 fashion scene makes waves as coordinated and decentralised fleets of digital and physical designers go all in to completely transform what has existed and weighed down many in the industry for decades upon decades before. 
      <br /><br />
      And, with that, the motivation for many shifting into web3 has been to also bring further light in terms leveraging the ability to more transparently and directly raise capital for sustainability efforts. The LA based traditional label, Polite, has partnered up with nonprofits Lonely Whale and Coral Gardeners to release the Impact Star capsule launch.
    </div>
    <div className={styles.text2}>
      100 philanthropic 3D design animations will be released with profits split evenly for each organization involved and the capital going to furthering the environmental mission of each of the non-profits. 
    </div>
    <div className={styles.text3}>
      It’s not a full step into web3 and on-chain end 2 end transparency, however, it does signal an important message for the rest of the industry and certainly nudges other more traditionally based brands minting fashion NFTs to use the tech for more than the basic “clout chasing fill my bags” mentality. 
    </div>
    <div className={styles.text4}>
      Eco-friendly innovation is a cumbersome topic. Some often get this confused and mixed up with setting on a path to advocating anti-humanism and basic economic functionality. It’s a shame really, because it’s important to note first how much global sustainability gains depend on the power of consumers to make our own choices. And having freedom of choice is intrinsically tied to financial opportunity and optionality. 
      <br /><br />
      This is what web3 and blockchain solves for, empowers and makes readily available to anyone— it’s the massive unleashing of democratised capital and serves this purpose more than any other industry in history. For a clear comparison, think about the last time web2 big tech, the airline industry, the fashion industry, AWS servers, and all of the other massively wasteful sectors of the economy substantially devolved economic power to the base in a way that could make a real difference on environmental impact and       
    </div>
    <div className={styles.text5}>
      policies. Luckily, more web2 founded corporates are queuing up to the idea that aligning with web3 principles creates more value than just ignoring them. 
    </div>
    <div className={styles.text6}>
      Some of the bigger transitions this month have been led by CurrencyWorks— a Canadian company turning oil waste into environmentally friendly energy that powers crypto mining. Municipalities pay a fee to give away their waste
    </div>
    <div className={styles.text7}>
      which then undergoes a process called pyrolysis, decomposing it at high temperatures under pressure to then generate electricity which can power up to 200 mining machines. 
    </div>
    <div className={styles.text8}>
      NFT project, Green NFTs, has launched a new bounty system for incentivising artists, creators and platforms to create and mint more environmentally sustainable NFTs. It’s a pretty cool and novel concept overall, directing more of those in the space to start embracing sustainable and carbon offsetting practices. 
      <br /><br />
      The bounties are distributed through a judging system and are meant to reinforce more awarness of the many already available options for minting ecological NFTs and also incentivise developers to brainstorm and deploy open source solution stacks that give rise to new technological tooling and engineering on this subject matter.
    </div>
  </div>
)

export default Page2930
