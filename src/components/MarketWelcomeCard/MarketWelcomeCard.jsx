import React from 'react'
import './marketwelcomecard.css'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

function MarketWelcomeCard({ image, title, link }) {
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
        <h3>{title}</h3>
        <Link to={link}>
          <Button primary={'black'} secondary={'white'}  borderColor={'#444'} text={'Conocer más'} />
        </Link>
      </div>
    </div>
  )
}

export default MarketWelcomeCard