import './slider.css'
import React from 'react'

import Header from '../Header/Header'

function Slider() {
  return (
    <div className='slider__container'>
      <Header />

      <div>

      </div>
      
      <div className='slider__rightside'>
        <p>Right side</p>
      </div>

      <div className='slider__leftside'>
        <p>Left side</p>
      </div>
      
    </div>
  )
}

export default Slider