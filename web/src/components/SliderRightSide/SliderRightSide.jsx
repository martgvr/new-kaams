import React from 'react'

function SliderRightSide({ image, productName }) {
    
    const cardStyle = {
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }

  return (
    <div className='slider__rightside' style={cardStyle}>
        <div className='slider__rightside--floating flex-row'>
        <p>{productName}</p>
        </div>
    </div>
  )
}

export default SliderRightSide