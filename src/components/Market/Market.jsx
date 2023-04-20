import './market.css'
import React from 'react'

import MarketNavbar from '../MarketNavbar/MarketNavbar'
import MarketWelcome from '../MarketWelcome/MarketWelcome'
import MarketProducts from '../MarketProducts/MarketProducts'

function Market() {
  return (
    <div className='market__container flex-column'>
      <MarketNavbar />
      {/* <MarketProducts /> */}
      <MarketWelcome />
    </div>
  )
}

export default Market