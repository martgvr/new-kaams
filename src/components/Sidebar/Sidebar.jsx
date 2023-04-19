import React, { useState } from 'react'
import './sidebar.css'

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true)

  const sidebarOpenHandler = () => setIsOpen(true)
  const sidebarCloseHandler = () => setIsOpen(false)
  const sidebarHandler = () => isOpen == false ? setIsOpen(true) : setIsOpen(false)

  return (
    <div className='sidebar__container' style={{ width: isOpen && '250px' }} onMouseEnter={sidebarOpenHandler} onMouseLeave={sidebarCloseHandler}>

      <div className='sidebar__icon flex-row' onClick={sidebarHandler}>
        <img src="https://cdn-icons-png.flaticon.com/512/7216/7216128.png" alt="" style={{ transform: isOpen && 'rotate(0deg)', opacity: isOpen && '1' }}/>
      </div>

      <div className='sidebar__menu flex-column' style={{ display: isOpen ? 'flex' : 'none' }}>
        <ul className='flex-column'>
          <li>Productos</li>
          <li>Carrito</li>
          <li>Nosotros</li>
        </ul>
      </div>

      <div className='sidebar__social'>
        <img src="https://pixlok.com/wp-content/uploads/2021/07/Instagram-Free-Icon-rdfd.png" alt="" />
        <img src="https://cdn-icons-png.flaticon.com/512/1617/1617541.png" alt="" />
      </div>

    </div>
  )
}

export default Sidebar