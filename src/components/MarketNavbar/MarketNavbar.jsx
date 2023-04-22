import React from "react"
import "./marketnavbar.css"
import MarketBreadcrumb from "../MarketBreadcrumb/MarketBreadcrumb"

function MarketNavbar({ breadcrumb }) {
	return (
		<div className="marketnavbar__container flex-row">
			<MarketBreadcrumb breadcrumb={breadcrumb} />

			<div className="marketnavbar__categories flex-row">
				<p>Hombre</p>
				<div className="marketnavbar__categories--divider"></div>
				<p>Mujer</p>
				<div className="marketnavbar__categories--divider"></div>
				<p>Accesorios</p>
			</div>

			<div className="marketnavbar__emptyspace"></div>
		</div>
	)
}

export default MarketNavbar
