import React from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page8384.module.scss'

const Page8384 = () => (
  <div className={styles.wrapper}>
    <div className={styles.imageBackground}>
      <Image
        src={`${DIGIFIZZY_S3}/11/images/8182_background.jpg`}
        width={1920}
        height={1497}
      />
    </div>

    <div className={styles.rect1}></div>
    <div className={styles.text1}>
      Big money has corrupted our legacy financial institutions and has subverted Big Tech. Now, it’s threatening to do the same to web3 and turn it into a battle of who can spend the most (and who can fleece the most). 
      <br /><br />
      The fundamental imbalances of the decentralized power structures are emerging, and we can see how easily big money corrupts in the space. 
      <br /><br />
      Now that the grass is cut, the snakes have shown. The same litigious, end-stage capitalistic web2 attitudes towards standards and practices, ownership, and monetization, are gnawing at the foundations of web3 when it exists for a purpose: there is a different way out of this. Not with lawyers, not with tie-ups and partnerships with the cartels themselves, but by building towards a fairer, more open, and freer environment that emphasizes community and sharing knowledge to further each other’s goals.
      <br /><br />
      “Sharing isn’t immoral—it’s a moral imperative. Only those blinded by greed would refuse to let a friend make a copy. Large corporations, of course, are blinded by greed…and the politicians they have bought off back them, passing laws giving them the exclusive power who can make copies.” - Guerilla Open Access Manifesto, 2008
      <br /><br />
      Touché. Swartz could have just predicted what might happen in web3 as NFTs have attracted the same gatekeepers of legacy and web2 that threaten to subvert the principles of openness, decentralization, and permissionlessness on which web3 was founded.
      <br /><br />
      Where will YOU choose to build?
    </div>
  </div>
)

export default Page8384
