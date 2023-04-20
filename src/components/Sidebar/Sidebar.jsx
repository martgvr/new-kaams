import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const windowWidth = useRef(window.innerWidth).current;

  const sidebarOpenHandler = () => setIsOpen(true)
  const sidebarCloseHandler = () => setIsOpen(false)
  const sidebarHandler = () => isOpen == false ? setIsOpen(true) : setIsOpen(false)

  let responsiveSidebar = {}

  if (windowWidth < 1500) {
    responsiveSidebar = { height: isOpen && '400px' }
  } else {
    responsiveSidebar = { width: isOpen && '250px' }
  }

  return (
    <div className='sidebar__container' style={responsiveSidebar} onMouseEnter={sidebarOpenHandler} onMouseLeave={sidebarCloseHandler}>

      <div className='sidebar__icon flex-row' onClick={sidebarHandler}>
        <img src="https://cdn-icons-png.flaticon.com/512/7216/7216128.png" alt="" style={{ transform: isOpen && 'rotate(0deg)', opacity: isOpen && '1' }}/>
      </div>

      <div className='sidebar__menu flex-column' style={{ display: isOpen ? 'flex' : 'none' }}>
        <ul className='flex-column'>
          <Link to="/" onClick={sidebarCloseHandler}><li>Home</li></Link>
          <Link to="/market" onClick={sidebarCloseHandler}><li>Productos</li></Link>
          <Link to="/cart" onClick={sidebarCloseHandler}><li>Carrito</li></Link>
          <Link to="/about" onClick={sidebarCloseHandler}><li>Nosotros</li></Link>
        </ul>
      </div>

      <div className='sidebar__social' style={{ transform: isOpen && 'rotate(90deg)' }}>
        <img src="https://pixlok.com/wp-content/uploads/2021/07/Instagram-Free-Icon-rdfd.png" alt="" style={{ transform: isOpen && 'rotate(-90deg)' }}/>
        <img src="https://cdn-icons-png.flaticon.com/512/1617/1617541.png" alt="" style={{ transform: isOpen && 'rotate(-90deg)' }} />
      </div>

    </div>
  )
}

export default Sidebar