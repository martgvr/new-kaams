import SliderCard from '../SliderCard/SliderCard'
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
          
        <div className='slider__leftside--cards flex-row'>
          <SliderCard active image={'https://taverniti.vteximg.com.br/arquivos/ids/255413-2000-2500/02679_602X1.jpg?v=638019640032800000'} />
          <SliderCard image={'https://static.wixstatic.com/media/76c18a_8b783a1de9884684be7b0970eaf3bea8~mv2.jpg/v1/fill/w_498,h_748,al_c,q_85,usm_0.66_1.00_0.01/76c18a_8b783a1de9884684be7b0970eaf3bea8~mv2.jpg'} />
          <SliderCard image={'https://static3.mujerhoy.com/www/multimedia/202110/01/media/cortadas/camisa-cropped-estampada-ktEG-U150704375415bME-624x624@MujerHoy.jpg'} />
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