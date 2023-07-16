import './header.css'
import { Link } from 'react-router-dom'
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
      <Link to="/">
        <img src="/logo2.png" alt="" className='header__logo' />
      </Link>

      <Link to="/cart">
        <div className='header__carticon flex-row'>
          <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="" />
          <p>{cartQuantity}</p>
        </div>
      </Link>
    </div>
  )
}

export default Header