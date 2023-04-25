import "./marketproducts.css"
import { useEffect, useState } from "react"
import { getData } from "../../services/firebase.service"
import { useParams, Link, useSearchParams } from "react-router-dom"

import Loading from "../Loading/Loading"
import MarketCard from "../MarketCard/MarketCard"
import MarketNavbar from "../MarketNavbar/MarketNavbar"


function MarketProducts() {
	const gender = useParams().gender
	
	const [data, setData] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [subcategories, setSubcategories] = useState([])
	const [searchParams, setSearchParams] = useSearchParams()
	const [productsFound, setProductsFound] = useState([])

	useEffect(() => {
		setProductsFound([])

		getData("products").then((res) => {
			console.log('PETICION DB');
			let subcategoriesFound = []
			const filteredProducts = res.filter((item) => item.gender == gender)

			filteredProducts.map((item) => {
				for (const property in item) {
					if (property == "category") {
						const checkExist = subcategoriesFound.find((item) => item == item[property])
						checkExist === undefined && subcategoriesFound.push(item[property])
					}
				}
			})

			setSubcategories(subcategoriesFound)
			setIsLoading(false)
			
			if (filteredProducts.length !== 0) {
				setProductsFound(filteredProducts)
				setData(filteredProducts)
			} 
		})
	}, [gender])
	
	
	let getType = searchParams.get('type')

	useEffect(() => {
		setProductsFound(data)
		getType = searchParams.get('type')

		if (getType !== null) {
			const getByType = data.filter(item => item.category == getType)
			setProductsFound(getByType)
		}
	}, [getType])
	

	return (
		<div className="market__container flex-column">
			<div className="marketproducts__container flex-column">
				<MarketNavbar breadcrumb={[gender, getType]} />

				{isLoading ? (
					<Loading />
				) : (
					<div className="marketproducts__grid flex-row">

						<div className="marketproducts__filters">
							<div className="marketproducts__filters--box flex-column">
								<div className="filterbox__title"><p>Categorías</p></div>
								<ul className="flex-column">
									{
									subcategories.length !== 0 ? 
										subcategories.map((item) => 
											<Link to={`?type=${item}`} key={item}>
												<li>{item.charAt(0).toUpperCase() + item.slice(1)}</li>
											</Link>) 
										: 
										<p>Nada encontrado</p>
									}
								</ul>
							</div>
						</div>

						<div className="marketproducts__content flex-row">
							{productsFound.length !== 0 ? productsFound.map((item) => <MarketCard key={item.name} image={item.image} name={item.name} price={item.price} />) : <p>Nada encontrado</p>}
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default MarketProducts
