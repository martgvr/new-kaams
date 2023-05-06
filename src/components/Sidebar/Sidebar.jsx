import './sidebar.css'
import React, { useState, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  
  const location = useLocation().pathname
  const windowWidth = useRef(window.innerWidth).current

  const sidebarOpenHandler = () => setIsOpen(true)
  const sidebarCloseHandler = () => setIsOpen(false)
  const sidebarHandler = () => isOpen == false ? setIsOpen(true) : setIsOpen(false)

  const activeItem = { backgroundColor: 'rgb(20, 20, 20)', color: 'rgb(255, 255, 255)' }

  let responsiveSidebar = {}

  const desktopSidebar = { width: isOpen && '270px' }
  const mobileSidebar = { height: isOpen && '320px',  flexDirection: isOpen && 'column' }
  responsiveSidebar = windowWidth < 1500 ? mobileSidebar : desktopSidebar

  return (
    <div className='sidebar__container' style={responsiveSidebar} onMouseEnter={sidebarOpenHandler} onMouseLeave={sidebarCloseHandler}>

        {
          (windowWidth < 1500 && !isOpen) && 
            <div className='sidebar__icon flex-row' onClick={sidebarHandler} >
                <img src="https://cdn-icons-png.flaticon.com/512/7216/7216128.png" alt=""/>
            </div>
        }

        {
          (windowWidth > 1500) && 
            <div className='sidebar__icon flex-row' onClick={sidebarHandler} style={{ transform: isOpen && 'rotate(-90deg)' }}>
                <img src="https://cdn-icons-png.flaticon.com/512/7216/7216128.png" alt="" />
            </div>
        }

      <div className='sidebar__menu flex-column' style={{ display: isOpen ? 'flex' : 'none' }}>
        <ul className='flex-column'>
          <Link to="/" onClick={sidebarCloseHandler}><li style={location == '/' ? activeItem : {}}>Home</li></Link>
          <Link to="/market" onClick={sidebarCloseHandler}><li style={location == '/market' ? activeItem : {}}>Productos</li></Link>
          <Link to="/cart" onClick={sidebarCloseHandler}><li style={location == '/cart' ? activeItem : {}}>Carrito</li></Link>
        </ul>
      </div>

      <div>
        
        <div className='sidebar__social' style={{ transform: (windowWidth > 1500 && isOpen) && 'rotate(90deg)' }}>
          <img src="https://pixlok.com/wp-content/uploads/2021/07/Instagram-Free-Icon-rdfd.png" alt="" style={{ transform: (windowWidth > 1500 && isOpen) && 'rotate(-90deg)' }}/>
          <img src="https://cdn-icons-png.flaticon.com/512/1617/1617541.png" alt="" style={{ transform: (windowWidth > 1500 && isOpen) && 'rotate(-90deg)' }} />
        </div>
      </div>


    </div>
  )
}

export default Sidebar