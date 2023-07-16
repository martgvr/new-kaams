import React from 'react'
import './marketcard.css'

function MarketCard({ image, name, price }) {
  const cardStyle = {
		backgroundImage: `url(${image})`,
		backgroundPosition: "center center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
	}

  return (
    <div className='marketcard__container flex-column'>
      <div className='marketcard__image' style={cardStyle}></div>
      <div className='marketcard__text flex-column'>
        <h4>{name}</h4>
        <p>$ {price}</p>
      </div>
    </div>
  )
}

export default MarketCard