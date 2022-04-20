import React from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page99100.module.scss'

const Page99100 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageBackground}>
        <Image
          src={`${DIGIFIZZY_S3}/11/images/99100_background.jpg`}
          width={1920}
          height={1497}
        />
      </div>
      <div className={styles.text1}>
        Custom Realm Market Interfaces        
      </div>
      <div className={styles.text2}>
        Whilst most smart contracts themselves are fully decentralised, developer teams still have substantial influence over the user and those choosing to build within their ecosystem, through their administration of single point of failure frontends. 
        <br /><br />
        Custom interfaces give more autonomy to builders and creators in multi-factor networks, allowing for diverse and failure resistant in depth modes of interaction between ecosystem content, creators, and users of all kinds.  
        <br /><br />
        Designer Realms are launching their open sourced custom interfaces with direct connection to Rarible x DIGITALAX global orderbook and liquidity pool smart contracts. Just like how the mycelial networks underpinning the growth of individual mushroom caps throughout a forest are hyperconnected under the forest floor, yet also independantly distinct, so is the combination of modular interfaces with shared smart contract stacks. 
        <br /><br />
        The custom interfaces also represent a designer’s stake in the ground and realm perimeterised metaverse territory. Network effects do best when blending the balance between individual agency and network support. 
        <br /><br />
        Beyond the technical, the coolest thing about these custom interfaces is how exciting it will be to see how many different aesthetic takes will take route and bloom. 
      </div>
    </div>
  )
}

export default Page99100
