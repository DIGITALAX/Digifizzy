import React, { useState, useEffect } from 'react'
import api from '@services/api/espa/api.service'
import Image from 'next/image'
import ModelCard from './model-card'
import styles from './page9394.module.scss'

const Page9394 = () => {
  const [modelList, setModelList] = useState([])

  async function loadData() {
    const models = await api.getAllModels() || []
    setModelList(models.filter(model => !model.organization && !model.hidden))
  }

  useEffect(() => {
    loadData()
  }, [])

  console.log('modelList: ', modelList)

  return (
    <div className={styles.wrapper}>
      <div className={styles.text1}>
        Global Models Syndicate       
      </div>
      <div className={styles.text2}>
        The Global Models Syndicate is a community and network dedicated for models exploring breakout looks and rising in prominence in web3 fashion and the open metaverse. It is not an agency or anything of that sort, but rather, an aligned network of models taking the initiative to go far beyond how much social media bypassed the traditional limits of the industry, allowing models to interact directly with brands, designers and armies of followers. 
        <br /><br />
        We’ve seen over the past 10 years how powerful just the most minimal amounts of network effects within web2 can be to open up previously locked down and exploitative industries. 
        <br /><br />
        Now, with web3, we complete the transformation. It’s a total glow up industry wide, thanks to the power of self sovereign networks. 
      </div>

      <div className={styles.modelsList1}>
        {modelList.slice(0, 12).map((modelItem, index) => (
          <ModelCard item={modelItem} key={`modelcard-${index}`}/>
        ))}
      </div>

      <div className={styles.modelsList2}>
        {modelList.slice(12, 32).map((modelItem, index) => (
          <ModelCard item={modelItem} key={`modelcard-${index}`}/>
        ))}
      </div>
    </div>
  )
}

export default Page9394
