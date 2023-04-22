import React from 'react'
import './marketproducts.css'

import MarketCard from '../MarketCard/MarketCard'
import MarketNavbar from '../MarketNavbar/MarketNavbar'

function MarketProducts() {
  return (
    <div className='marketproducts__container flex-column'>
      <MarketNavbar breadcrumb={['Hombre']}/>

      <div className='flex-row'>
        <div className='marketproducts__filters'>
          <div className='marketproducts__filters--box'>Filtros</div>
        </div>

        <div className='marketproducts__content flex-row'>
          <MarketCard />
          <MarketCard />
          <MarketCard />
          <MarketCard />
          <MarketCard />
          <MarketCard />
          <MarketCard />
          <MarketCard />
          <MarketCard />
          <MarketCard />
          <MarketCard />
          <MarketCard />
        </div>
      </div>
    </div>
  )
}

export default MarketProducts