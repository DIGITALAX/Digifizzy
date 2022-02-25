import React from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page8182.module.scss'

const Page8182 = () => (
  <div className={styles.wrapper}>
    <div className={styles.rect1}></div>

    <a
      className={styles.image1}
      href='https://twitter.com/_nathanvdh'
      target='_blank'
    >
      <Image
        src={`${DIGIFIZZY_S3}/10/images/8182_image1.png`}
        width={235}
        height={235}
      />
    </a>

    <div className={styles.text1}>
      Snapshot Labs w/ Nathan VDH
    </div>
    <div className={styles.text2}>
      I’m a political philosophy guy, so that’s the angle I bring to what I’m doing with Snapshot. I spent my time in university studying how new technologies affect us and realizing the threat that Big Tech poses our free will. The line between prediction models and pushing humans to make certain decisions is super blurry. So how do we put data back in the hands of humans? How do we stop the unstoppable surveillance capitalism machine? After a long search, crypto appeared to me as the most convincing answer. Not only does crypto allow humans to regain control over their data, it also allows for perhaps the most necessary ingredient to freedom - privacy.
      <br /><br />
      Snapshot started in August 2020 out of the Balancer team. Balancer was searching for a solution to allow users to vote with tokens in liquidity pools. Snapshot started as an off-chain voting solution to allow for these tokens to be active in governance, and the fact that voting was free was then an added bonus. One of the key ingredients of DeFi’s success is composability, so one of the driver of Snapshot’s success has been that flexibility. Users don’t have to choose between putting their tokens to work in DeFi or voting in the project’s governance. By being free, Snapshot also tremendously reduces the barrier to participate in governance, which is more favorable to smaller investors who might not want to pay gas fees for each and every vote. Nobody wants decentralized governance to turn into a whale game, not even whales themselves. True decentralized governance is core to the ideology of DeFi and that’s what we try to improve as much as possible.
    </div>
    <div className={styles.text3}>
      Rather than pointing any specific strategy, I think I’d rather highlight the composability of strategies. For example, I love the POAP strategy in addition to the POAP plugin. Basically, get an « I Voted » POAP when you vote on your community’s governance and then give voting power to that POAP for future strategies. This allows you to reward consistent voters with a higher say and incentivizes participation. Add that strategy on top of your ERC-20 strategy for example, and you’ve got something really fun and easy to set up that rewards participation.
      <br /><br />
      I’m always in awe when I see job applications on Snapshot. People offering their services to a DAO through a Snapshot proposal, it makes me so proud of what the Snapshot community is becoming. When you see the thoughtfullness that goes into it, the well-described responsibilities, KPIs and compensation, it makes you think that obviously this is the future. What’s weirder than a job interview in the traditional world? Stressful, demonstrably discriminatory, weird power dynamics, how are we still deciding what people do with their lives like this? I really believe that DAOs are a big part of the future of work and I hope Snapshot can continue to play a part.
      <br /><br />
      The next two milestones I’m the most excited about are Snapshot X and our mobile app. Snapshot’s mission is to bring governance into the hands of as many as possible and allowing humans to have a say in the communities they’re a part of, so going on mobile is a key component of that mission. The app is almost ready and will be on both iOS and Android. We’re hoping this helps increase participation further. Snapshot X  brings Snapshot on-chain on StarkNet, a layer 2 ZK-Rollup. By leveradging StarkWare’s incredible tech, we’ll be able to greatly upgrade Snapshot’s security, introduce trustless execution of votes, and keep records of everything on-chain for approximatively 100x less fees than Ethereum layer 1. This will be a game-changer for blockchain governance and especially for big DAOs with large treasuries.
    </div>
  </div>
)

export default Page8182
