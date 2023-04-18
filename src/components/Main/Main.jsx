import './main.css'
import React from 'react'

import Header from '../Header/Header'
import Slider from '../Slider/Slider'
import Sidebar from '../Sidebar/Sidebar'

function Main() {
  return (
    <section className='main__container flex-row'>
      <Sidebar />
      <Header />
      <Slider />
    </section>
  )
}

export default Main