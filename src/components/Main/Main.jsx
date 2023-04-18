import './main.css'
import React from 'react'

import Slider from '../Slider/Slider'
import Sidebar from '../Sidebar/Sidebar'

function Main() {
  return (
    <section className='main__container flex-row'>
      <Sidebar />
      <Slider />
    </section>
  )
}

export default Main