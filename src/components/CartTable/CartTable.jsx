import "./carttable.css"
import React from "react"

function CartTable({ data }) {
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
						<td>{item.quantity}</td>
						<td>$ {item.quantity * item.price}</td>
						<td><img src="delete.png" alt="" className="carttable__deleteicon"/></td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default CartTable
