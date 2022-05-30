import React from 'react';
import Image from 'next/image';
import { DIGIFIZZY_S3 } from '@constants/urls';
import styles from './page5354.module.scss';

const Page5354 = () => (
  <div className={styles.wrapper}>
    <a href="https://cs.nyu.edu/~dodis/" target="_blank">
      <div className={styles.image1}>
        <Image src={`${DIGIFIZZY_S3}/13/images/5354_image.jpeg`} width={338} height={338} />
      </div>
    </a>
    <div className={styles.text3}>Yevgeniy Dodis</div>
    <div className={styles.text4}>CRYPTOGRAPHY GROUP NYU</div>
    <div className={styles.text5}>privacy & security</div>
    <div className={styles.text1}>
      Do you believe privacy is an inherent right?
      <br />
      <br />I think so. There is a reason we feel more safe and secure in our personal home than
      when being outside, and many people react angrily if their property boundaries are violated.
      With the advancement of the internet, on-line shopping and social networks, many people did
      not realize initially that the extra utility to do “cool things” often comes at the price of
      privacy. There is a reason why most services offered by Google and Facebook are “free”: the
      users’ pay with their personal information. And we are slowly going through a period where
      everybody --- including the end users --- are starting to realize that privacy is something
      they should care for and protect. Indeed, I am hoping that --- slowly but surely --- we are
      moving to a world where people can surf the Internet, do on-line shopping, interact on social
      networks, and play computer games without worrying that they will be tracked (or, worse,
      hacked) by third parties they did not authorize.
      <br />
      <br />
      The recent General Data Protection Regulation (GDPR) is a good step in this direction, but
      much more needs to be done. New applications have to be developed with privacy built-in, as
      opposed to added as an afterthought.
    </div>
    <div className={styles.text2}>
      <br />
      <br />
      What impact do you think the recent leak of the Supreme Court draft opinion on the right to
      privacy will have on personal autonomy, relationship autonomy, and private communications in
      the US and beyond?
      <br />
      <br />
      <br />
      <br />
      This is a difficult question. As most progressive people, I really hope that the Supreme court
      would come to its senses, and decide not to overturn Roe v. Wade. But your question is much
      broader. Indeed, we have seen a general shift in the way the government treats personal
      privacy. With some countries (e.g., Australia, China, and, to some extent, the United Kingdom)
      being much worse offenders than others. The United States has been historically much more
      conscious regarding the right for privacy of its citizens. E.g., the Health Insurance
      Portability and Accountability Act (HIPAA) restricts how personal health information can be
      handled and by whom, while the Family Educational Rights and Privacy Act (FERPA) does the same
      for students’ private information. Still, the narrative has been definitely shifting starting
      with the 9/11 (e.g., war on terrorism) and the internet boom of the early 2000s (“cool things”
      trump privacy).
      <br />
      <br />I am optimistic, though, that cooler heads prevail, and the laws that we pass will
      respect the human rights to make their own decisions and not be subject to any kind of mass
      surveillance. I am personally interested in the recently renewed debate regarding End-to-End
      (E2E) Encryption, and I have done a lot of recent work in the area. Very roughly, the heart of
      the debate is whether any secure communication application should have a built-in backdoor,
      which allows the content provider, or possibly law-enforcement authorities, the ability to
      either monitor users’ communication, either on-line or at least access after the fact.
      Oversimplifying, most politicians and law enforcement agents fail to understand something very
      fundamental. There is no magic wand which allows one to magically ensure that exactly the
      right people will get access to sensitive information, and exactly under the right
      circumstances. Once you introduce the backdoor, you are opening a pandora box of unexpected
      things happening.
    </div>
    <div className={styles.text6}>
      <br />
      <br />
      In what ways do the role of encryption and technology get taken for granted in protecting the
      practical exercise of privacy rights?
      <br />
      <br />
      <br />
      Your question is a great excuse to continue talking about E2E debate. As I mentioned,
      everybody recognizes and agrees that sensitive information should be encrypted. The “secure
      lock” on the web browser (i.e., using HTTPS instead of HTTP) was one of the first examples of
      businesses able to effectively use encryption for a greater good. The relative ease of success
      of HTTPS over HTTP, and more recently, the plethora of modern secure messaging applications
      (such as WhatsApp, which encrypts everything even from the content provider!), give users a
      false sense of security. Namely, privacy is easy: just encrypt everything sensitive. Of
      course, in reality encryption is only as good as your secret key distribution (SKD). (Where,
      recall, that the secret key is what is needed by a legitimate party to decrypt the content,
      and which should never get to the “bad guys”.) And the latter problem is really the heart of
      the difficulty. If done well, a good SKD solution will be done in the background so as not to
      inconvenience the users. But this is a really difficult problem in general. Especially when we
      start to go beyond pairwise communications, and expand the concept of private communication to
      dynamically changing groups of users. And, even more difficult, if we attempt to implement the
      dream of politicians and law enforcement agents to augment otherwise secure systems with
      hidden backdoors.
      <br />
      <br />
      So I would agree with you that we --- as in general public and policy makers --- take the
      encryption for granted, but fail to realize that it only solves part of the puzzle. By
      reducing the problem of secure storage and communication of data to that of storing the
      distributing secret keys. Which is basically as hard to get right.
      <br />
      <br />
      <br />
      <br />
      How will zero knowledge proofs change the experience and use of private property, data, and
      activity in technology and society?
      <br />
      <br />
      <br />
      <br />I think zero-knowledge proofs (ZKPs) are definitely part of the puzzle. For those not
      familiar with the term, ZKPs allow a semi-paradoxical ability to prove precisely what needs to
      be proven, without leaking an iota of unnecessary information. (For example, proving that you
      have an unrevoked driver’s license without revealing anything else, or that encrypted message
      complies with the company’s policy, without leaking anything about its content beyond the
      fact.) Indeed, in the utopian future we could envision people using ZKPs to do electronic
      commerce or medical institutions to do research on patients’ medical data. Hey, maybe we can
      even pay taxes without leaking more information to the IRS beside the final amount we owe.
      <br />
      <br />
      However, I personally feel that building reliable E2E solutions is probably an easier
      intermediate goal, before we get to the much more advanced settings of collaborative computing
      using ZKPs. I hope to be wrong, though, and that the efficiency, trust models, and the
      simplicity of using ZKPs will improve enough to see their widespread adoption in the near
      future. Some of my close friends are actually working on making this a reality.
      <br />
      <br />
      <br />
      <br />
      What’s your perspective on web3 implementation of zero knowledge proofs and the importance of
      incentives to cultures, policies, and laws that enshrine respect for privacy rights?
      <br />
      <br />I think this is a great area with a lot of potential. The blockchain technology is
      growing at an enormous speed, and is taking the world by storm. I would still say that web3 is
      still at its infancy, and we are still looking for a killer application beyond
      crypto-currencies (such as ZCash and many others now), where advanced cryptography (such as
      ZKPs) could be used ubiquitously. In fact, looking at the current state of web3 applications,
      the problem of consensus, agreement, denial of service, decentralization, and fault-tolerance
      are still the ones which require the most efforts to get right. Adding privacy is certainly a
      fun (and fundamental!) challenge, and I would argue that all solutions to these problems
      should not leave solving privacy to the end. But I personally feel that ZKPs (and privacy in
      general) is not yet the bottleneck for the development of web3 technologies, as we are still
      looking for more killer applications for decentralization. Adding proper incentives is
      certainly part of the puzzle as well.
      <br />
      <br />
      But everything is still in its infancy. So, I think we should buckle our seatbelts, enjoy the
      ride, and see where it will take us.
    </div>
  </div>
);

export default Page5354;
