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
        From a tiny, unsuspecting space, feeble lights came through a glass door, dying and reappearing again on the pavement of B avenue. The lights were obscured by beings in their dark coats, packed in what could well have been a speakeasy. From the street, it was difficult to guess what was going on inside. What is a party or a funeral? A mass or a voodoo ritual? Or what is a union meeting or some bourgeois
        <br />
        wine and cheese gathering? Seen from the street, the kabuki-like image projected a scene that looked like beings moving inside a prehistoric dark cavern. Those who knew had the codes could enter the speakeasy. A refined Sydney was at the door, checking patrons in. 
        <br /><br />
        Two kind Cerberus - Alejandro and Juan - helped keep the gates to hell. They both looked like not so worn-out veterans of the Spanish civil war. Alejandro had the humor of someone who spent time in Carabanchel, and Juan was as efficient and
        <br />
        enigmatic as someone who could have carried operations behind the lines of Franco, the Caudillo of Spain. Hannah was a curandera with her pots of distilled or not so distilled Cachaça and other bottles.        
      </div>
      <div className={styles.text3}>
        Jean-Victor Nkolo, a modern day Oungan summoned the audience and performed a sacred ritual begging for Ancestors’ blessings. Ashe! Ashe! Lee Morgan could rest in peace across the waters that brought him to the Americas from Ifirikya, the mother of all continents. After this ritual, the Oungan priest evoked other geniuses of the trumpet of sax. Music was a magic. Fela Anikulapo Kuti and his Chop and Quench, Manu Dibango and his Soul Makossa, all contemporaries who picked it up in the 70s where Lee Morgan left it, masterfully propelling the embryo of world music into the firmament. The sacred bond and artistic gravitas that united these African giants and the legendary African American that was Lee Morgan made them artistic brothers from the same mother. The production team had served a menu that would make news that evening.
        <br /><br />
        Once the Oungan’s intro was over, the music played so finely. Was Alphonso Horne already born when Lee Morgan died? Indeed, Alphonso had an almost teen-age look. His street credentials hat, chic trousers and genuinely bemused youthful face gave it away. The man was indeed young, and only the raw talent of a blessed artist could have given him the ability to lead a band with such suaveness and grace. A trumpet player, his rendition of the epic Lee Morgan’s piece the Sidewinder was both faithful to Morgan’s artistry and astonishingly vibrant. Saxophonists Christ Lewis must have been of the same age group with Alfonso. 
      </div>
      <div className={styles.text4}>
        His two-piece suit, classy shoes and nice tie gave him the seriousness that matched his mastery of the sax. Bass player Marty Jaffe was outstanding and impressive. He seemed surprised by his own talent, a genuine show of humility. Matts Sullivan had graciously brought a magnificent piano. Mathis Picard played it with abandonment and sheer excellence. The sound and soulfulness from this piano made this an incredibly great moment of good jazz music. Darrian Douglas’ drums were precise and tricky. Art Blakey, who collaborated so much with Lee Morgan, must have applauded from heavens.
        <br />
        And when the band brilliantly performed Moanin’, the masterpiece by Art Blakey and the Jazz Messengers with Lee Morgan, the speakeasy was filled with goose bumps. Silence and admiration. Let the music play.
      </div>
      <div className={styles.text5}>
        Jean-Victor Nkolo
        <br />
        New York, NY
        <br />
        22 February 2022
      </div>
    </div>
  )
}

export default Page1516
