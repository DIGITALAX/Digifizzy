import React from 'react'
import Image from 'next/image'
import styles from './page2526.module.scss'

const Page2526 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text1}>
        Professional models will know the experience of harnessing the power of the pose (or the pout). Heidi Klum was also once a beginner–beginners in the modeling industry know that they must understand their best angles to make the most money. And there’s no other way to find out what a model’s best angles are than by understanding their bodies and by constantly practicing how to get the most flattering shot. 
        <br /><br />
        Female supermodels are exhorted to give off the appearance of looking tall, create the illusion that their limbs and torso are longer and more flattering than they really are, and make their faces look more taut and well-defined in photographs than they might be in real life.
        <br /><br />
        Men, on the other hand, are encouraged to give off an aura of natural confidence to create the best impressions for the products that they wear. What painstaking lengths models go to in the name of fashion…and it is only right to do so, because the lens will inevitably find and amplify the least flattering of our body parts, regardless of how well you angle yourself. 
        <br /><br />
        And it’s a propos, now that our physical selves have begun to intertwine with our virtual selves, and as the lines between our avatars and ourselves blur, that we take a look at how the same skill and art that modeling and posing by extension entail–and the significance that they give to the messages that they convey.
      </div>

      {
        Array(36).fill(0).map((item, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              left: (index % 3) * 248,
              top: 1 + Math.trunc(index / 3) * 127,
              width: 248,
              height: 127
            }}
          >
            <Image
              src='/magazine/9/images/2324_image1.png'
              width={248}
              height={127}
            />
          </div>
        ))
      }
      
    </div>
  )
}

export default Page2526
