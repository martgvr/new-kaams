import React from "react"
import "./marketbreadcrumb.css"

function MarketBreadcrumb({ breadcrumb }) {
	return (
		<div className="marketnavbar__breadcrumb flex-row">
			<div className="flex-row">
				<p>Productos</p>
				<img src="bread.png" alt="" />

				{breadcrumb !== undefined &&
					breadcrumb.map((item, index, array) => (
						<>
							<p>{item}</p>
							{
								index !== array.length - 1 &&
								<img src="bread.png" alt="" />
							}
						</>
					))
				}
			</div>
		</div>
	)
}

export default MarketBreadcrumb
