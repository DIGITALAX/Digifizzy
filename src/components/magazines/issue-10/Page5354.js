import React from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page5354.module.scss'

const Page5354 = () => (
  <div className={styles.wrapper}>
    <div className={styles.imageBackground}>
      <Image
        src={`${DIGIFIZZY_S3}/10/images/5354_background.jpg`}
        width={1920}
        height={1497}
      />
    </div>

    <div className={styles.rect1}></div>
    <div className={styles.rect2}></div>

    <div className={styles.text1}>
      In the game of Texas No-Limit Hold 'em, as in life itself, those that succeed the most (e.g., those that make the most money) are playing chess while the rest of the strugglers play checkers. Because there are games within the game itself that transcends the conventional game as in poker. 
      <br /><br />
      And winning metagames requires you to develop skills for the bigger game. This includes leveraging your ability to play games that can help you earn a pretty penny, cultivating your sources of information or whatnot that would give you a competitive advantage, and lastly, executing and keeping your decision management skills at the top of its game. Anything that deviates from the balance might cause you to lose money, and tightening up your meta-skills will solidify your game into theoretical unexploitability.
      <br /><br />
      Pro poker players know all about this. With the advent of game theory, poker is eons away from its purely intuitive gameplay, transforming into a cold, calculated, and detached game of constant quantitative analysis.
    </div>
    <div className={styles.text2}>
      Now, the poker metagame has everything to do with game theory and memorizing the solutions to situations that may arise. The flamboyant game we know of has been superseded by constant machine-like efficiency built from winning mental models.
      <br /><br />
      In the end, poker is probability and knowing how to analyze people and their actions. Skill and chance in poker are a false dichotomy since the former is a product of managing your risks. But at the same time, you can't possibly win every hand. However, the regulars you see at the final tables of major tournaments get to the big dance for a reason because they have gotten the mindset down pat.
      <br /><br />
      Poker is ultimately a game of working your opponents into a deceptive story by making sure your expressions, actions, and pauses tell the stories YOU want your opponents to believe. Every action leading to the culmination of winning or losing a pot needs to make sense if you wish them to act a certain way. And if they don't, be prepared to lose a lot of money playing against the sharks at the poker tables down Atlantic City way.      
    </div>
  </div>
)

export default Page5354
