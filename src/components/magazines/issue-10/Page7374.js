import React from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page7374.module.scss'

const Page7374 = () => (
  <div className={styles.wrapper}>
    <div className={styles.imageBackground1}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/7374_image2.png`}
        width={679}
        height={1375}
      />
    </div>
    {
      Array(18).fill(0).map((value, index) => {
        return (
          <div
            style={{
              position: 'absolute',
              width: '321px',
              height: '218px',
              left: `${parseInt(index / 6) * 321}px`,
              top: `${301 + parseInt(index % 6) * 218}px`
            }}
          >
            <Image
              src={`${DIGIFIZZY_S3}/10/images/7374_image1.png`}
              width={321}
              height={218}
            />
          </div>
        )
      })
    }
    <div className={styles.text1}>
      Decentralised Fabrication
    </div>
    <div className={styles.text2}>
      In the mad scramble for the metaverse, as tech bros and starry-eyed utopians fight to determine its semantics, one thing is quite clear: the demand for digital fashion design, pattern design, and garment manufacturing has gone full-on stupid.
      <br /><br />
      All of this looming transformation towards primary production empowered by web3 tools has led to an explosion of interest in open source and decentralized fabrication by a host of creators enticed by the promise that web3 has to offer. 
      <br /><br />
      The ability to produce digital garments in a totally decentralized manner is certainly food for thought that’s worth ruminating on, considering 29% of the planet’s carbon footprint is a result of the monolithic supply chain process responsible for the production, manufacturing, and transportation of goods and services.
      <br /><br />
      And fashion’s rather belated paradigm shift towards decentralized production is just another milestone as far as how decentralization itself is pointing towards a new era of industrial revolution disrupting a whole host of industries with arguably promising results amidst the constant iteration and development on technical, administrative, and even cultural levels. 
      <br /><br />
      For instance, the advent of NFTs and the tools one needs to create them have opened the doors for independent designers, brands, and fashion houses of every ilk–to a new world full of enthusiastic, eager kindred spirits in an environment fostering creative freedom that’s infinitely more rewarding than the IRL option. 
    </div>
  </div>
)

export default Page7374
