import "./cart.css"
import { Link } from 'react-router-dom'
import React, { useContext } from "react"
import { cartContext } from "../../context/cart.context.jsx"

import Button from "../Button/Button"
import CartTable from "../CartTable/CartTable"

function Cart() {
	const { cart, clearCart } = useContext(cartContext)

	let cartTotal = 0

	cart.map((item) => {
		cartTotal += item.price * item.quantity
		return 0
	})

	return (
		<>
			{cart.length == 0 ? (
				<div className="empty__cart flex-column">
					<img src="emptycart.png" alt="" />
					<h1>No encontramos items en tu carrito</h1>
					<p>Presioná el botón de abajo para explorar nuestros productos</p>
					<Link to="/market"><Button text={'Productos'} /></Link>
				</div>
			) : (
				<div className="cart__container flex-column">
					<div className="cart__list flex-column">
						<h1 className="cart__list--title">Items en el carrito</h1>
						<CartTable data={cart} />
					</div>
					<div className="cart__checkout flex-column">
						<div className="cart__checkout--box flex-column">
							<h2>Resumen</h2>
							<table>
								<thead>
									<tr>
										<th style={{ width: "70%" }}>Detalle</th>
										<th>Total</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Productos</td>
										<td>$ {cartTotal}</td>
									</tr>
									<tr>
										<td>Envío</td>
										<td style={{ fontSize: "0.8em" }}>CONSULTAR</td>
									</tr>
								</tbody>
							</table>
						</div>

						<div className="cart__checkout--box flex-row">
							<Button text={'Vaciar carrito'} handleCartAdd={clearCart}/>
							<Link to="/checkout"><Button text={'Realizar orden de compra'}/></Link>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default Cart
