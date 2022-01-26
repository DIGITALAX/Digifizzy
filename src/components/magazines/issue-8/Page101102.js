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
          src='/magazine/8/images/101102_background.jpg'
          width={960}
          height={1497}
        />
      </div>
      <div className={styles.image1}>
        <Image
          src='/magazine/8/images/101102_image1.png'
          width={231}
          height={231}
        />
      </div>
      <div className={styles.image2}>
        <Image
          src='/magazine/8/images/101102_image1.png'
          width={231}
          height={231}
        />
      </div>
      <div className={styles.image3}>
        <Image
          src='/magazine/8/images/101102_image1.png'
          width={231}
          height={231}
        />
      </div>
      <div className={styles.image4}>
        <Image
          src='/magazine/8/images/101102_image1.png'
          width={231}
          height={231}
        />
      </div>
      <div className={styles.image5}>
        <Image
          src='/magazine/8/images/101102_image1.png'
          width={231}
          height={231}
        />
      </div>
      <div className={styles.image6}>
        <Image
          src='/magazine/8/images/101102_image1.png'
          width={231}
          height={231}
        />
      </div>
      <div className={styles.image7}>
        <Image
          src='/magazine/8/images/101102_image1.png'
          width={231}
          height={231}
        />
      </div>
      <div className={styles.text1}>
        Letters to A Young VC. Part II.
      </div>
      <div className={styles.text2}>
        You want to know what I am up to? 
        <br /><br />
        It is all right there transparently and has been available for the past year, more so than anybody else in this space. If you want the inside track of collecting the next greatest talents, just go to the marketplace or straight up ask me who you should collect. 
        <br /><br />
        But these old VC games are over, you'll keep making what looks like good money for a while, but one day you will wake up and find that the metaverse as I am explaining it to you, beyond the bullshit Zuck is going on about, has fully arrived and left you in the dust.
        <br /><br />
        So get busy being real.
        <br /><br />
        Focusing on the indie and upcoming, getting fully web3 including decentralising the capital and governance stacks, or go enjoy your moment in the sun whilst you have it. Cause its not going to last much longer. Gatsby's party is almost over.
        <br /><br />
        Come in from the cold and leave behind your barely better than pharmaceutical industry debt peddling ways and become genuine buyers of the greatest renaissance market that humanity has ever known..  great! We welcome you.
        <br /><br />
        But don't pretend you have sincerity or that the VC game has been all pro founder and rainbows. 
        <br /><br />
        You think that a story means some sort of abstraction away from clarity, something that takes people away from the real thing, in order to pacify the mind and submit the consumer to corporate control, whatever corporate spreadsheets and bottomlines require to be sold into the market, the story is mis-framed as the thing that will pacify the mind as consumers simply sit back and accept it. That is such a brutal bastardisation of the beauty, power and capital value of stories. 
        <br /><br />
        The actual value of stories is in how they communicate the signal not the noise. That's the real power of NFTs.
      </div>
      <div className={styles.text3}>
        - Emma-Jane MacKinnon-Lee
      </div>

      {!contentUnlocked && <NoUnlockPage issueId={issueId} />}
    </div>
  )
}

export default Page101102
