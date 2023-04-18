import React from 'react'
import './sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar__container flex-column'>

      <div className='sidebar__menu'>
        <img src="https://cdn-icons-png.flaticon.com/512/7216/7216128.png" alt="" />
      </div>

      <div className='sidebar__social flex-column'>
        <img src="https://pixlok.com/wp-content/uploads/2021/07/Instagram-Free-Icon-rdfd.png" alt="" />
        <img src="https://cdn-icons-png.flaticon.com/512/1617/1617541.png" alt="" />
      </div>

    </div>
  )
}

export default Sidebar