import React from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { DIGIFIZZY_S3 } from '@constants/urls'
import NoUnlockPage from '../common/NoUnlockPage'
import styles from './page99100.module.scss'

const Page99100 = () => {
  const router = useRouter()
  const { slug } = router.query
  const issueId = slug && slug.length > 0 ? slug[0] : magazineIssues[0].issueId
  const { contentUnlocked } = useSelector((state) => state.global.toJS())

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageBackground}>
        <Image
          src={`${DIGIFIZZY_S3}/10/images/99100_background.jpg`}
          width={960}
          height={1497}
        />
      </div>
      <div className={styles.image1}>
        <Image
          src={`${DIGIFIZZY_S3}/10/images/99100_image1.png`}
          width={351}
          height={332}
        />
      </div>
      <div className={styles.text1}>
        Conflicting Markets.
      </div>
      <div className={styles.text2}>
        The conflict between primary and secondary, and real versus fake, economic activity is causing a significant asymmetric drift. A disconnect between what models predict should be happening and what is actually happening. 
        <br /><br />
        A race to concentrate inflationary and fantasy gains spreads through secondary markets chasing speculative bets made more for status and tribal affiliation signals than for any belief in the creation and circulation of primary sources of wealth. With the behavior of small networks of people mostly much more predictable than markets at large, it’s not very surprising when the signs start to flash red yet again and the race to the exits picks up faster than steam or the latest meme coins. Miming thought leadership and serious entrepreneurship just for stockpiling debt with eyes on the exits, bribing the gatekeepers to close the door after the next greater fool gets through, and a flight to safety all seem like the main codependent drivers of this economic theatre.
        <br /><br />
        A real flight to safety would be smarter about where to invest funds while the music is still playing, literally where on the globe to support the build out of decentralized infrastructure, and all of the rest, in order to facilitate more emergent primary wealth generation and circulation activity from the massively multiplayer, self-sovereign edges of every network. It takes a deeply naive yet smug and solipsistic view –– a fixed mindset view or even a religious millenarian, messianic, end of times kind of view –– to believe in the machine model economy and its downstream implications. 
        <br /><br />
        It is a symbol, with dramatic real world impact. It is a clear example that defines so many governments and organizations which wish they could operate more like them –– of the impulse to control every corner of social, economic, and cultural activity in the name of pride, of ego, of protection from the evil “other” of the day, of historic complaints, of in group vs out group zero sum races to annihilate one another, of fear of a people being free to think, speak, live, and trade freely. And it is the most extreme sample we have today from among the largest of global economies of what might happen when systemic shocks and stresses pile up to the point where they are actively ignored alongside the nothing being done in response to increasingly brazen militant aggression. 
      </div>
      <div className={styles.text3}>
        - Emma-Jane MacKinnon-Lee
      </div>

      {!contentUnlocked && <NoUnlockPage issueId={issueId} />}
    </div>
  )
}

export default Page99100
