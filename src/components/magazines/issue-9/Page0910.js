import React from 'react'
import Image from 'next/image'
import styles from './page0910.module.scss'

const Page0910 = () => (
  <div className={styles.wrapper}>
    <div className={styles.image1}>
      <Image
        src='/magazine/9/images/0910_image1.png'
        width={460}
        height={598}
      />
    </div>
    <div className={styles.image2}>
      <Image
        src='/magazine/9/images/0910_image2.png'
        width={571}
        height={598}
      />
    </div>
    <div className={styles.image3}>
      <Image
        src='/magazine/9/images/0910_image3.png'
        width={404}
        height={273}
      />
    </div>
    <div className={styles.image4}>
      <Image
        src='/magazine/9/images/0910_image4.png'
        width={404}
        height={729}
      />
    </div>
    <div className={styles.image5}>
      <Image
        src='/magazine/9/images/0910_image5.png'
        width={404}
        height={613}
      />
    </div>

    <div className={styles.text1}>
      But some things never change. All species, humans included, communicate their social status to one another. IRL, fashion, and by extension the clothes we wear, are reflections of our status, character, and clout. Clothes make the man–and that fact isn’t lost upon the billions of individuals ready to dive into the new order of web3.
      <br /><br />
      NFTs are the key driver of this digital renaissance across industries, allowing us to perpetually own digital experiences on the blockchain, including the fashion our virtual representations rock. It’s gotten so hot that Big Fashion has already jumped on the bandwagon and currently licking its lips for more action; there’s plenty of money to be made in the metaverse, after all.
    </div>
    <div className={styles.text2}>
      Just look at the rising number of artists, designers, and content creators who have taken the step to go full-time web3, participating in a new era of empowerment and agency to create their own prosperity in the space using completely decentralized applications and tools.
      <br /><br />
      This wholesale line-blurring between physical and digital is in full swing, and in fashion: NFTs are creating entirely novel digital experiences, and digital fashion is just another facet of this ongoing upheaval.
    </div>
    
  </div>
)

export default Page0910
