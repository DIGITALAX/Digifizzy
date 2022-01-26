export const getAllResultsFromQuery = async (query, resultKey, chainId, owner) => {
  let lastID = ''
  let isContinue = true
  const fetchCountPerOnce = 1000

  const resultArray = []
  try {
    while (isContinue) {
      const result = await query(chainId, owner, fetchCountPerOnce, lastID)
      if (!result[resultKey] || result[resultKey].length <= 0) isContinue = false
      else {
        resultArray.push(...result[resultKey])
        if (result[resultKey].length < fetchCountPerOnce) {
          isContinue = false
        } else {
          lastID = result[resultKey][fetchCountPerOnce - 1]['id']
        }
      }
    }
  } catch (e) {
    
  }

  return resultArray
}

export const getAllResultsFromQueryWithoutOwner = async (query, resultKey, chainId) => {
  let lastID = ''
  let isContinue = true
  const fetchCountPerOnce = 1000

  const resultArray = []
  try {
    while (isContinue) {
      const result = await query(chainId, fetchCountPerOnce, lastID)
      if (!result[resultKey] || result[resultKey].length <= 0) isContinue = false
      else {
        resultArray.push(...result[resultKey])
        if (result[resultKey].length < fetchCountPerOnce) {
          isContinue = false
        } else {
          lastID = result[resultKey][fetchCountPerOnce - 1]['id']
        }
      }
    }
  } catch (e) {
    
  }

  return resultArray
}


export const getAttribute = (metaData, key) => {
  if (!metaData.attributes) return ''
  const attributeItem = metaData.attributes.find(
    item => item.type.toLowerCase() === key.toLowerCase()
  )
  if (!attributeItem) return ''
  return attributeItem.value
}
