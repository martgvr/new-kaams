import React from "react"
import "./marketnavbar.css"
import { Link } from 'react-router-dom';

import MarketBreadcrumb from "../MarketBreadcrumb/MarketBreadcrumb"


function MarketNavbar({ breadcrumb }) {
	return (
		<div className="marketnavbar__container flex-row">
			<MarketBreadcrumb breadcrumb={breadcrumb} />

			<div className="marketnavbar__categories flex-row">
				<Link to="/market/hombre"><p>Hombre</p></Link>
				<div className="marketnavbar__categories--divider"></div>
				<Link to="/market/mujer"><p>Mujer</p></Link>
				<div className="marketnavbar__categories--divider"></div>
				<Link to="/market/accesorios"><p>Accesorios</p></Link>
			</div>

			<div className="marketnavbar__emptyspace"></div>
		</div>
	)
}

export default MarketNavbar
