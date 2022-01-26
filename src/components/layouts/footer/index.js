import React, { memo } from 'react'
import LandingFooter from './landing'

const Footer = ({ isMagazineContents }) => {
  const isMobile = !(window.innerWidth > 768)

  if (isMagazineContents && !isMobile) {
    return null
  }

  return (<LandingFooter />)
}

export default Footer
