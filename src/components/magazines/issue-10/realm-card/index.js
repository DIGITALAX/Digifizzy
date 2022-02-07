import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './styles.module.scss'

const RealmCard = ({
  realmName,
  image,
  tags,
  borderColor,
  linkName
}) => {
  
  return (
    <div className={styles.realmInfoCardwrapper}>
      <Link
        href={`https://patrons.digitalax.xyz/realm/${linkName}`}
      >
        <a target='_blank'>
      <div className={styles.imageWrapper} style={{
        background: `${borderColor}`
      }}>
        <Image
          className={styles.imageContent}
          src={image}
          width={580}
          height={580}
        />
      </div>
      </a>
    </Link>
    </div>
  )
}

export default RealmCard
