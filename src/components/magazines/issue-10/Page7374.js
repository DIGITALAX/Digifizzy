import React from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page7374.module.scss'

const Page7374 = () => (
  <div className={styles.wrapper}>
    <div className={styles.imageBackground}>
      <Image
        src='/magazine/9/images/7374_background.jpg'
        width={1920}
        height={1497}
      />
    </div>

    <div className={styles.text1}>
      Spatial Relations through Diverse Lenses 
    </div>
    <div className={styles.text2}>
      Peezy R.
    </div>
    <div className={styles.text3}>
      Space is the lifeblood of literally every piece of art ever conceived and created.
    </div>
    <div className={styles.text4}>
      As famed Austrian-American architect, designer, sculptor and all-around homme de la renaissance 
    </div>
    <div className={styles.text5}>
      Friedrick Kiesler once wrote in 1942’s Note on Designing the Gallery and Press Release 
    </div>
    <div className={styles.text6}>
      Pertaining to the Architectural Aspects of the Gallery) : “No object of nature or art can ever exist or has ever existed without environment…We, the inheritors of chaos, must be the architects of a new unity.”
      <br /><br />
      Architects build space. Photographers, on the other hand, capture it. Painters imply its use in their work, while sculptors are completely reliant on it.
      <br /><br />
      Space encompasses not only the work itself and its content, but also its immediate surroundings, and the environment it is located in.
      <br /><br />
      Kiesler goes on to emphasize the critical role art galleries and museums play: “These galleries are a demonstration of a changing world, in which the artist’s work stands forth as a vital entity in a spatial whole, and art stands forth as a vital link in the structure of a new myth.”
      <br /><br />
      In other words, the use of space in art–and the subsequent way it defines itself through its transformation–is part and parcel of conveying the creator’s muse.
    </div>
  </div>
)

export default Page7374
