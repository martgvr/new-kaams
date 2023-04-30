import "./cart.css"
import React, { useContext } from 'react'
import { cartContext } from '../../context/cart.context.jsx'

import CartTable from "../CartTable/CartTable"

function Cart() {
	const { cart } = useContext(cartContext)

	return (
		<div className="cart__container">
			<div className="cart__list flex-column">
				<h1 className="cart__list--title">Items en el carrito</h1>
				<CartTable data={cart}/>
			</div>
			<div className="cart__checkout flex-column">
				<div className="cart__checkout--box">
					<p>Total</p>
				</div>
				<div className="cart__checkout--box">
					<p>Botón</p>
				</div>
			</div>
		</div>
	)
}

export default Cart
