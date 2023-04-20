import React from 'react'
import './marketproducts.css'
import MarketCard from '../MarketCard/MarketCard'

function MarketProducts() {
  return (
    <div className='marketproducts__container flex-row'>
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
  )
}

export default MarketProducts