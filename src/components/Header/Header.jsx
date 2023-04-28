import './header.css'
import React, { useContext } from 'react'
import { cartContext } from '../../context/cart.context.jsx'

function Header() {
  const { cart } = useContext(cartContext)

  let cartQuantity = 0;

  cart.map(item => {
    cartQuantity += item.quantity;
    return 0;
  })

  return (
    <div className='header__container flex-row'>
      <img src="/logo2.png" alt="" />

      <div className='flex-row'>
        <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="" />
        <p>{cartQuantity}</p>
      </div>
    </div>
  )
}

export default Header