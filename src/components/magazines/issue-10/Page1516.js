import React, { useRef } from 'react'
import Image from 'next/image'
import { DIGIFIZZY_S3 } from '@constants/urls'
import styles from './page1516.module.scss'

const Page1516 = () => {
  return (
    <div className={styles.wrapper}>
      {
        Array(21).fill(0).map((value, index) => {
          return (
            <div
              key={`back${index}`}
              style={{
                position: 'absolute',
                width: '279px',
                height: '515px',
                left: `${parseInt(index / 3) * 279}px`,
                top: `${-30 + parseInt(index % 3) * 515}px`
              }}
            >
              <Image
                src={`${DIGIFIZZY_S3}/10/images/1516_background.png`}
                width={279}
                height={515}
              />
            </div>
          )
          
        })
      }
      <div className={styles.rect1}></div>
      <div className={styles.image1}>
        <Image
          src={`${DIGIFIZZY_S3}/10/images/1516_image1.png`}
          width={309}
          height={552}
        />
      </div>
      <div className={styles.image2}>
        <Image
          src={`${DIGIFIZZY_S3}/10/images/1516_image2.png`}
          width={820}
          height={406}
        />
      </div>
      <div className={styles.image3}>
        <Image
          src={`${DIGIFIZZY_S3}/10/images/1516_image3.png`}
          width={794}
          height={1497}
        />
      </div>
      <div className={styles.image4}>
        <Image
          src={`${DIGIFIZZY_S3}/10/images/1516_image4.png`}
          width={291}
          height={438}
        />
      </div>

      <div className={styles.text1}>
        Slugs Saloon + Allan Buchman + Lee Morgan Tribute        
      </div>
      <div className={styles.text11}>
        Slugs Saloon + Allan Buchman + Lee Morgan Tribute        
      </div>
      <div className={styles.text2}>
        industry and music artists too are starting to be swept up by a wave of new web3 interest, Datafruits fund is touching on an interesting sector for supporting more open music collaboration models with their fm platform that allows any artist to stream live individually or in groups and eventually start bringing in on-chain funding split models that are directed to those streaming. It serves as another conduit for eager listeners to support creators in their early stages and share in value and ownership alongside the creator as they progressively decentralise their work and ecosystem to a fully fledged DAO model. 
        <br /><br />
        industry and music artists too are starting to be swept up by a wave of new web3 interest, Datafruits fund is touching on an interesting sector for supporting more open music collaboration models with their fm platform that allows any artist to stream live individually or in groups and eventually start bringing in on-chain funding split models that are directed to those streaming. It serves as another conduit for eager listeners to support creators in their early stages and share in value and ownership alongside the creator as they progressively decentralise their work and ecosystem to a fully fledged DAO model. 
      </div>
      <div className={styles.text3}>
        industry and music artists too are starting to be swept up by a wave of new web3 interest, Datafruits fund is touching on an interesting sector for supporting more open music collaboration models with their fm platform that allows any artist to stream live individually or in groups and eventually start bringing in on-chain funding split models that are directed to those streaming. It serves as another conduit for eager listeners to support creators in their early stages and share in value and ownership alongside the creator as they progressively decentralise their work and ecosystem to a fully fledged DAO model. 
        <br /><br />
        industry and music artists too are starting to be swept up by a wave of new web3 interest, Datafruits fund is touching on an interesting sector for supporting more open music collaboration models with their fm platform that allows any artist to stream live individually or in groups and eventually start bringing in on-chain 
        <br /><br />
        industry and music artists too are starting to be swept up by a wave of new web3 interest, Datafruits fund is touching on an interesting sector for supporting more open music collaboration models with their fm platform that allows any artist to stream live individually or in groups and eventually start bringing in on-chain 
      </div>
      <div className={styles.text4}>
        industry and music artists too are starting to be swept up by a wave of new web3 interest, Datafruits fund is touching on an interesting sector for supporting more open music collaboration models with their fm platform that allows any artist to stream live individually or in groups and eventually start bringing in on-chain funding split models that are directed to those streaming. It serves as another conduit for eager listeners to support creators in their early stages and share in value and ownership alongside the creator as they progressively decentralise their work and ecosystem to a fully fledged DAO model. 
        <br /><br />
        industry and music artists too are starting to be swept up by a wave of new web3 interest, Datafruits fund is touching on an interesting sector for supporting more open music collaboration models with their fm platform that allows any artist to stream live individually or in groups and eventually start bringing in on-chain funding split models that are directed to those streaming. It serves as another conduit for eager listeners to support creators in their early stages and share in value and ownership alongside the creator as they progressively decentralise their work and ecosystem to a fully fledged DAO model. 
      </div>
    </div>
  )
}

export default Page1516
