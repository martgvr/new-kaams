import './slider.css'
import React from 'react'

function Slider() {
  return (
    <div className='slider__container'>
      
      <div className='slider__leftside flex-column'>
        <div className='slider__leftside--text flex-column'>
          <h1>New collection otoño-invierno</h1>
          <h2>2023</h2>
          <div className='slider__leftside--divider'></div>
          <p>Fina camisa de dama compuesta por una mezcla de las delicadas telas tweed y rayón, y una ligera proporción de naylon. Cuenta con botones de elastómero forjados en frios.</p>
          <p>Disponible en talles desde S a XL</p>
        </div>
      </div>

      <div className='slider__rightside'>
        <div className='slider__rightside--floating flex-row'>
          <p>Camisa de dama</p>
        </div>
      </div>

    </div>
  )
}

export default Slider