import "./success.css"
import React from "react"
import { useLocation } from "react-router-dom"

function Success() {
	const { state } = useLocation()

	return (
		<div className="success__container flex-column">
			<div className="checkout__breadcrumb flex-row">
				<div className="checkout__breadcrumb--firstLine"></div>
				<div className="checkout__breadcrumb--secondLine" style={{ backgroundColor: "rgb(97, 168, 94)" }}></div>

				<div className="checkout__breadcrumb--item done">
					<h2>1</h2>
					<p>Agregar productos al carrito</p>
				</div>

				<div className="checkout__breadcrumb--item done">
					<h2>2</h2>
					<p>Completar tus datos personales</p>
				</div>

				<div className="checkout__breadcrumb--item active">
					<h2 style={{ color: "white" }}>3</h2>
					<p>Nos pondremos en contacto con vos</p>
				</div>
			</div>

			<div className="success__content flex-row">
				<div className="success__content--image"></div>
				<div className="success__content--text flex-column">
					<h1>Orden procesada con éxito!</h1>
					<p>En instantes nos pondremos en contacto con vos.</p>
					<p>Tu número de orden es: {state.orderNumber}</p>
				</div>
			</div>
		</div>
	)
}

export default Success
