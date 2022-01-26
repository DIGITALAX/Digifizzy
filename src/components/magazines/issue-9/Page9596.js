import React, { useState, useEffect } from 'react'
import AvatarElementalCard from './AvatarElementalCard'

import { getAvatarElementals } from '@services/api/apiService'

import {
  getAllResultsFromQueryWithoutOwner,
  getAttribute
 } from '@helpers/thegraph.helpers'

 import {
  POLYGON_CHAINID
} from '@constants/global.constants'

import { reviseUrl } from '@utils/helpers'

import styles from './page9596.module.scss'

const Page9596 = () => {
  const [loading, setLoading] = useState(false)
  const [avatarElementals, setAvatarElementals] = useState([])

  async function getData() {
    const result = await getAllResultsFromQueryWithoutOwner(
      getAvatarElementals, 
      'avatarElementals', 
      POLYGON_CHAINID
    )
    
    console.log('avatarElementals: ', result)
    setAvatarElementals(result.filter(item => parseInt(item.id) > 100014))
    setLoading(false)
  }

  useEffect(() => {
    setLoading(true)
    getData()
  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.text1}>
        Open Source Avatar Library
      </div>
      <div className={styles.avatarList}>
      {
        avatarElementals.slice(0, 12).map(item => {
          return (
            <AvatarElementalCard
              key={item.name}
              name={item.name}
              image={item.image}
              minter={getAttribute(item, 'Minter')}
              type={getAttribute(item, 'Type')}
              gender={getAttribute(item, 'Gender')}
              style={getAttribute(item, 'Style')}
              element={getAttribute(item, 'Element')}
              tokenUri={reviseUrl(item.tokenUri)}
              sourceFileExt={getAttribute(item, 'sourceFileExt')}
              sourceFileType={getAttribute(item, 'sourceFileType')}
              renderedFileExt={getAttribute(item, 'renderedFileExt')}
            />
          )
        })
      }
      </div>
      <div className={styles.text2}>
        When we think about the spaces that we inhabit, the external elements that shape, direct and constrict our experience are usually noticed first; what we recognise far less is how we move through the flow of everything surrounding us and the intricate ways our unique relationships with ourselves form a totally individual fingerprint in motion.
      </div>
      <div className={styles.text3}>
        Each pose is symbolic, adding up to a representation of ourselves in the avatars that we choose, and how our body language projects our moods, the games that we play with each other, our desire, and even, or maybe especially, the tell tale signs about our deeper selves we've yet to encounter.
        <br /><br />
        <span>Who knew there was so much contained and conveyed in a simple pose.</span>
        <br /><br />
        This isn't the interface we most intimately wear, it's the infinite interface that is a part of who we are. 
        <br /><br />
        It is what is within our skin. 
        <br /><br />
        Who knew too that the trick to kinesthetic self sovereignty is simply to go shopping. 
        <br /><br />
        We must first collect the ingredients that later become our movements. 
        <br /><br />
        As we bring every complement into web3 fashion; from modeling, to make up artistry to hair styling on through photography and more, we are releasing in parallel an abundance of these ingredients stored and made available to all in the Open Source Elemental Libraries- including the core commodities and constitutions traded throughout these industries and markets.
        <br /><br />
        <span>The Global Models Syndicate has launched the Open Elementals: Avatar Library.</span>
        <br /><br />
        Designers and Models mint 1155 NFTs of various and diverse avatar files and poses, open sourcing them with transparent on-chain provenance, enabling every model and designer that moves through this medium direct access and empowerment to an unbound range of personas reflective of the full diversity of humanity.
        <br /><br />
        Any designer can now incorporate these 1155 NFTs into their master 721 model NFTs (i.e. when the model is used in the scene or garment being sold), establishing a new use case for the ERC-998 bundle standard. You can read more about how we use ERC-998 for the web3 fashion supply chain through Fractional Garment Ownership
        {' '}<a href='https://designers.digitalax.xyz/fractional/' target='_blank'>here.</a>
      </div>


    </div>
  )
}

export default Page9596
