import './market.css'
import React from 'react'

import MarketProducts from '../MarketProducts/MarketProducts'
import MarketWelcome from '../MarketWelcome/MarketWelcome'
import MarketNavbar from '../MarketNavbar/MarketNavbar'

function Market() {
  return (
    <div className='market__container'>
      <MarketNavbar />
      {/* <MarketProducts /> */}
      <MarketWelcome />

    </div>
  )
}

export default Market