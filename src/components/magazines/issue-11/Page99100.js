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
      <div className={styles.text1}>
        We Stand With You.
      </div>
      <div className={styles.text2}>
       🇺🇦
      </div>

      {!contentUnlocked && <NoUnlockPage issueId={issueId} />}
    </div>
  )
}

export default Page99100
