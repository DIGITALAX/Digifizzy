import React from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page2526.module.scss'

const Page2526 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image1}>
        <Image
          src={`${DIGIFIZZY_S3}/11/images/2526_image1.png`}
          width={1920}
          height={1497}
        />
      </div>
      <div className={styles.text1}>
        Anti-competitive practices are just part and parcel of the system. Gatekeepers left and right are laying out patent thickets, which are basically an obtuse, complex mishmash of interconnected intellectual property rights that competitors–or creators–need to clear out before a product actually hits the market. Even more so for the case of pharmaceuticals, whose pricing is determined by a web of legal mumbo-jumbo and oodles and oodles of court cases in the United States. 
      </div>
      <div className={styles.text2}>
        Why do Americans need to groan every month when it's prescription refilling time? Why do drugs like Humira cost 80% less on the other side of the pond compared to Freedomland™? Why must they continue to blast Americans in the ass with skyrocketing drug prices?
        <br /><br />
        That’s why patent thicketing is so inherently maleficent: it WILLFULLY keeps competitors and creators off the market. But on the other hand, patent extensions for the most marketed drugs in America generate hundreds of billions of dollars in even more sales.
        <br /><br />
        Willful misuse or abuse of patents hurt those that need them the most: the patients. The unregulated market exclusivity of these patent wash-traders scheme to crush the competition, maximize EBITDA for the shadowy cabal of corporate drones at the root of all of this, and exorbitant drug prices for everyone involved. Hooray. Number go up.
        <br /><br />
        Patents were created to encourage innovation and drive investment. 
        <br /><br />
        But patents were never meant to last forever. 
        <br /><br />
        Drug patents were meant to expire after an exclusivity period. And when they do, this allows manufacturers to create lower-cost generic versions or similar drugs in order to create a healthy, competitive market that lowers prices. Not ass-backwards like it is now, where the gatekeepers pervert and twist the letter of law to prolong their patents long after they made 500x, 1000x, 1500x, 10000x after they had made back their investment.
        <br /><br />
        Pharma Bro was slapped with a $64 million fine and got himself banned from the pharmaceutical industry for his efforts. 
        <br /><br />
        On the other hand, the Sacklers, who continue to admit no wrongdoing, will remain one of the wealthiest families in the world–and continue lining their pockets long after they had already made $10 billion.
        <br /><br />
        Money printer go brr.
      </div>
    </div>
  )
}

export default Page2526
