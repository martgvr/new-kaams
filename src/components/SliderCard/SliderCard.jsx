import React from 'react'
import './slidercard.css'

function SliderCard({ image, active }) {
    const cardStyle = {
        background: `url(${image})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        filter: active ? `grayscale(0%)` : `grayscale(100%)`,
    }

  return (
    <div className='slidercard__container' style={cardStyle}></div>
  )
}

export default SliderCard