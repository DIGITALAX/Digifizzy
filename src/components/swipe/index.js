import React from 'react'
import SwipeableViews from 'react-swipeable-views'
import styles from './styles.module.scss'

export default function swipePage({ children }) {

  return (
    <div className={styles.wrapper}>
      <SwipeableViews enableMouseEvents>
        { children }
      </SwipeableViews>
    </div>
  )
}
