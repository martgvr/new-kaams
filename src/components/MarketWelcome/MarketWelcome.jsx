import React from 'react'
import './marketwelcome.css'
import MarketWelcomeCard from '../MarketWelcomeCard/MarketWelcomeCard'
import Button from '../Button/Button'

function MarketWelcome() {
  const bannerStyle = {
    backgroundImage: `url('https://wallpapercave.com/wp/wp6130531.jpg')`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }

  return (
    <div className='marketwelcome__container flex-column'>

        <div className='marketwelcome__banner flex-row'>
          <div className='banner__leftside flex-column'>
            <h1>Welcome title</h1>
            <p>Welcome description</p>
            <Button primary={'black'} secondary={'white'}  borderColor={'#444'} text={'Conocer más'} />
          </div>
          <div className='banner__rightside' style={bannerStyle}>rightside</div>
          <div className='banner__divider1'></div>
          <div className='banner__divider2'></div>
        </div>

        <div className='marketwelcome__cardscontainer flex-row'>
          <MarketWelcomeCard />
          <MarketWelcomeCard />
          <MarketWelcomeCard />
        </div>
    </div>
  )
}

export default MarketWelcome