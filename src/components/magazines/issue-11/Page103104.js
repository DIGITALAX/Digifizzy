import React from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { DIGIFIZZY_S3 } from '@constants/urls'
import NoUnlockPage from '../common/NoUnlockPage'
import styles from './page103104.module.scss'

const Page103104 = () => {
  const router = useRouter()
  const { slug } = router.query
  const issueId = slug && slug.length > 0 ? slug[0] : magazineIssues[0].issueId
  const { contentUnlocked } = useSelector((state) => state.global.toJS())

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageBackground}>
        <Image
          src={`${DIGIFIZZY_S3}/11/images/103104_background.jpg`}
          width={960}
          height={1497}
        />
      </div>
      <div className={styles.text1}>
        ZK_CC0 Continued. 
      </div>
      <div className={styles.text2}>
        ZK scalability promises to bring all of the utility that blockchain offers to the masses, giving CC0 content new places to thrive and new ways to be monetised. 
        <br /><br />
        Imagine the modern digital mini factories powered by NFTs, which do so much more than just mass produce items that sit in boxes waiting for optimal demand and logistics conditions to match up. 
        <br /><br />
        These new factories instead radically reduce the friction to production and costs of transactions and discoverability. They combine liberty and economics to remove artificially competitive markets and the power that corporations have to rig them. The open bazaar is ruled neither by big governments or corporate hierarchies. 
        <br /><br />
        ZK and CC0 are the ultimate power tools that make free markets complete. This combination breaks free the ability to gain marginal returns within market segmets previously restricted by centralised control so that it is no longer economically rational to spend so much on limiting access when equal or better alternatives are readily available.
        <br /><br />
        Money from the marketplace, not the politicians, as we move beyond the all too lingering deceit that creating duplications of pieces of paper creates wealth. 
        <br /><br />
        Because, it doesn't. 
        <br /><br />
        And you don't need any knowledge to know just how true that is. 
        <br /><br />
        From here on out it's zeroes all the way down.
        <br /><br />
        00000000000000000000000000000000000000000000000000000000 <br />
        00000000000000000000000000000000000000000000000000000000 <br />
        00000000000000000000000000000000000000000000000000000000 <br />
        00000000000000000000000000000000000000000000000000000000 <br />
        00000000000000000000000000000000000000000000000000000000 <br />
        00000000000000000000000000000000000000000000000000000000 <br />
        00000000000000000000000000000000000000000000000000000000 <br />
        00000000000000000000000000000000000000000000000000000000 <br />
        00000000000000000000000000000000000000000000000000000000 <br />
        00000000000000000000000000000000000000000000000000000000 <br />
        00000000000000000000000000000000000000000000000000000000 <br />
        00000000000000000000000000000000000000000000000000000000 <br />
        00000000000000000000000000000000000000000000000000000000 <br />
        00000000000000000000000000000000000000000000000000000000 <br />
        00000000000000000000000000000000000000000000000000000000 <br />
      </div>
      <div className={styles.text3}>
        - Emma-Jane MacKinnon-Lee
      </div>

      {!contentUnlocked && <NoUnlockPage issueId={issueId} />}
    </div>
  )
}

export default Page103104
