import React from 'react'
import Image from 'next/image'
import realms from 'src/data/realms.json'
import RealmCard from './realm-card'
import styles from './page9192.module.scss'

const Page9192 = () => (
  <div className={styles.wrapper}>
    <div className={styles.text1}>
      Featured Designers & Realms
    </div>

    <div className={styles.image1}>
      <Image
        src='/magazine/9/images/9192_image1.png'
        width={408}
        height={1352}
      />
    </div>
    <div className={styles.realmWrapper}>
    {
      realms.slice(0, 12).map(realm => {
        return (
          <div key={realm.name}>
            <RealmCard
              realmName={realm.name}
              tags={realm.tags}
              image={realm.image}
              borderColor={realm.borderColor}
              linkName={realm.name}
            />
          </div>
        )
      })
    }
    </div>
    <div className={styles.realmWrapper2}>
    {
      realms.slice(12, 17).map(realm => {
        return (
          <div key={realm.name}>
            <RealmCard
              realmName={realm.name}
              tags={realm.tags}
              image={realm.image}
              borderColor={realm.borderColor}
              linkName={realm.name}
            />
          </div>
        )
      })
    }
    </div>
  </div>
)

export default Page9192
