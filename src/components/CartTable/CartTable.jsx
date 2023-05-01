import "./carttable.css"
import React, { useContext } from 'react'
import { cartContext } from '../../context/cart.context.jsx'

function CartTable({ data }) {
	const { increaseQuantity, decreaseQuantity, removeItem } = useContext(cartContext)

	const decreaseHandler = (uid, size) => decreaseQuantity(uid, size)
	const increaseHandler = (uid, size) => increaseQuantity(uid, size)

	return (
		<table className="carttable">
			<thead>
				<tr>
					<th style={{ textAlign: 'start' }}>Producto</th>
					<th>Precio</th>
					<th>Cantidad</th>
					<th>Total</th>
					<th>Eliminar</th>
				</tr>
			</thead>
			<tbody>
				{data.map((item) => (
					<tr>
						<td className="carttable__productcol flex-row">
							<div className="carttable__productcol--image" style={{ backgroundImage: `url(${item.image})` }}></div>
							<div className="carttable__productcol--data flex-column">
								<div>
									<h4>Nombre</h4>
									<p>{item.name}</p>
								</div>
								<div>
									<h4>Talle</h4>
									<p>{item.size}</p>
								</div>
							</div>
						</td>
						<td>$ {item.price}</td>
						<td>
							<div className="carttable__counter flex-row">
								<div onClick={() => decreaseHandler(item.uid, item.size)}>-</div>
								{item.quantity}
								<div onClick={() => increaseHandler(item.uid, item.size)}>+</div>
							</div>
						</td>
						<td>$ {item.quantity * item.price}</td>
						<td><img src="delete.png" alt="" className="carttable__deleteicon" onClick={() => removeItem(item.uid, item.size)}/></td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default CartTable
