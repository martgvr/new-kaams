import React from 'react'
import './marketwelcomecard.css'
import Button from '../Button/Button'

function MarketWelcomeCard({ image, description, link }) {
  const cardStyle = {
    backgroundImage: `url(${image})`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }

  return (
    <div className='marketwelcomecard__container flex-row'>
      <div className='marketwelcomecard__image' style={cardStyle}></div>
      <div className='marketwelcomecard__description flex-column'>
        <h3>{description}</h3>
        <Button primary={'black'} secondary={'white'}  borderColor={'#444'} text={'Conocer más'} />
      </div>
    </div>
  )
}

export default MarketWelcomeCard