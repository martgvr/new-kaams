import React from "react"
import "./marketbreadcrumb.css"

function MarketBreadcrumb({ breadcrumb }) {
	return (
		<div className="marketnavbar__breadcrumb flex-row">
			<div className="flex-row">
				<p>Productos</p>
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Breadcrumb_separator_2.svg/1200px-Breadcrumb_separator_2.svg.png" alt="" />

				{breadcrumb !== undefined &&
					breadcrumb.map((item, index, array) => (
						<>
							<p>{item}</p>
							{
								index !== array.length - 1 &&
								<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Breadcrumb_separator_2.svg/1200px-Breadcrumb_separator_2.svg.png" alt="" />
							}
						</>
					))
				}
			</div>
		</div>
	)
}

export default MarketBreadcrumb
