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
          <MarketWelcomeCard description={'Sobretodos y montgomery para hombres'} image={'https://i.pinimg.com/236x/b4/4f/c0/b44fc072b18c678647246dd4abb73505.jpg'}/>
          <MarketWelcomeCard description={'Sueteres tejidos para mujer'} image={'https://i.pinimg.com/564x/04/86/da/0486da84eee9bc1bcafd5497a4713635.jpg'} />
          <MarketWelcomeCard description={'Gorros de lana y guantes'} image={'https://www.salpa.com.ar/13291-large_default/gorro-de-lana-negro.jpg'} />
        </div>
    </div>
  )
}

export default MarketWelcome