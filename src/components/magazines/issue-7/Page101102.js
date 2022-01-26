import React from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import NoUnlockPage from '../common/NoUnlockPage'
import styles from './page101102.module.scss'

const Page101102 = () => {
  const router = useRouter()
  const { slug } = router.query
  const issueId = slug && slug.length > 0 ? slug[0] : magazineIssues[0].issueId
  const { contentUnlocked } = useSelector((state) => state.global.toJS())

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageBackground}>
        <Image
          src='/magazine/7/images/101102_background.jpg'
          width={960}
          height={1497}
        />
      </div>
      <div className={styles.image1}>
        <Image
          src='/magazine/7/images/101102_image1.png'
          width={389}
          height={475}
        />
      </div>
      <div className={styles.text1}>
        Web3 Fashion & Money. Part II.
      </div>
      <div className={styles.text2}>
        How you level up and hone your craft, how good you get at what might be dismissed as business 101: the fundamentals, how you learn your market segment, what it thinks it wants, what it actually desires, and how your brand/label/designs/stories all fit and entice the desires of those most aligned with what you make. You must learn how to make your market.
        <br /><br />
        Because in web3, every story is a product, is a market in itself, networked together, composably extended, enhanced and built upon by fellow web3 market participants. These web3 native network effects are where the real wealth comes from.
        <br /><br />
        That cold dose of reality aside— that web3 isn’t a winning lottery ticket but rather takes significant work to unlock its potential— and if you’ve gone through the needed gut check and are determined to do all it takes to thrive in web3 fashion then here’s where a full embrace of the fleet model is so essential.
        <br /><br />
        The truth is you can’t go at this alone. One merchant up against a crown doesn’t get very far, beheaded at best. Thousands of merchants acting in close coordination make for a complete revolution, melting the centralised crown into new coin for all.
        <br /><br />
        Because this is what web3 is ultimately about and what makes it a powerful tool to break away from old and constrictive ways.
        <br /><br />
        Web3 is inherently social coordination technology bringing the decentralisation of capital, ownership and participatory access in governance and markets to all.
        <br /><br />
        When you adhere to those core principals and maintain alignment with them the benefits can be astounding. But if you fall out of alignment and begin to simply mimic the appearance of web3, the rest of the market will leave you far behind quicker than you can imagine.
        <br /><br />
        And because of the immutable nature of blockchain based record keeping the history of abuses against the web3 commons is not forgotten and hard to overcome.
        <br /><br />
        Learn the basics, contribute generously and share in the feast.
      </div>
      <div className={styles.text3}>
        - Emma-Jane MacKinnon-Lee
      </div>

      {!contentUnlocked && <NoUnlockPage issueId={issueId} />}
    </div>
  )
}

export default Page101102
