import React, { memo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './styles.module.scss'

const ModelCard = ({ item }) => {
  if (!item) {
    return null
  }

  return (
    <div className={cn(styles.wrapper)}>
      <Link href={encodeURI(`https://models.digitalax.xyz/models/${item['modelId']}`)}>
        <a target='_blank'>
          {
            item['image_url'] && item['image_url'] != '' &&
            <Image
              src={item['image_url']}
              alt={item['modelId']}
              width="200"
              height="200"
              className={styles.photo}
            />
          }
          {
            (!item['image_url'] || item['image_url'] == '') &&
            <div className={styles.noPhoto} />
          }
          <div className={styles.name}>{item['modelId']}</div>
        </a>
      </Link>
    </div>
  )
}

ModelCard.propTypes = {
  item: PropTypes.object,
}

ModelCard.defaultProps = {
  item: {},
}

export default memo(ModelCard)
