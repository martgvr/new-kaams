import "./checkout.css"
import { Link } from 'react-router-dom'
import React, { useContext } from "react"
import { cartContext } from "../../context/cart.context.jsx"

import Button from "../Button/Button"
import CheckoutForm from "../CheckoutForm/CheckoutForm"

function Checkout() {
	const { cart, clearCart } = useContext(cartContext)

	return (
		<>
			{cart.length == 0 ? (
				<div className="empty__cart flex-column">
					<img src="emptycart.png" alt="" />
					<h1>No encontramos items en tu carrito</h1>
					<p>Presioná el botón de abajo para explorar nuestros productos</p>
					<Link to="/market">
						<Button text={"Productos"} />
					</Link>
				</div>
			) : (
				<div className="checkout__container flex-column">
					<div className="checkout__breadcrumb flex-row">
						<div className="checkout__breadcrumb--firstLine"></div>
						<div className="checkout__breadcrumb--secondLine"></div>

						<div className="checkout__breadcrumb--item done">
							<h2>1</h2>
							<p>Agregar productos al carrito</p>
						</div>

						<div className="checkout__breadcrumb--item active">
							<h2>2</h2>
							<p>Completar tus datos personales</p>
						</div>

						<div className="checkout__breadcrumb--item">
							<h2 style={{ color: "white" }}>3</h2>
							<p>Nos pondremos en contacto con vos</p>
						</div>
					</div>

					<div className="checkout__formbox">
						<div className="checkout__formbox--title flex-column">
							<h1>Estamos muy cerca de finalizar tu pedido :D</h1>
							<p>Completá tus datos personales con información real, tené en cuenta que vamos a utilizar esos datos para comunicarnos con vos, y así coordinar el pago y el envío.</p>
						</div>

						<div className="checkout__formbox--form flex-column">
							<CheckoutForm data={cart} clearCart={clearCart} />
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default Checkout
