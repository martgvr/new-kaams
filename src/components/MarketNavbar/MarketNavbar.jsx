import React from "react"
import "./marketnavbar.css"
import { Link } from 'react-router-dom';

import MarketBreadcrumb from "../MarketBreadcrumb/MarketBreadcrumb"

function MarketNavbar({ breadcrumb }) {
	const styledCategory = { backgroundColor: 'black', color: 'white' }
	
	return (
		<div className="marketnavbar__container flex-row">
			<MarketBreadcrumb breadcrumb={breadcrumb} />

			<div className="marketnavbar__categories flex-row">
				<Link to="/market/hombre" style={breadcrumb[0] == 'hombre' ? styledCategory : {}}><p>Hombre</p></Link>
				<div className="marketnavbar__categories--divider"></div>
				<Link to="/market/mujer" style={breadcrumb[0] == 'mujer' ? styledCategory : {}}><p>Mujer</p></Link>
				<div className="marketnavbar__categories--divider"></div>
				<Link to="/market/accesorios" style={breadcrumb[0] == 'accesorios' ? styledCategory : {}}><p>Accesorios</p></Link>
			</div>

			<div className="marketnavbar__emptyspace"></div>
		</div>
	)
}

export default MarketNavbar
