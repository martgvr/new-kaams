import "./marketproducts.css"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getData } from "../../services/firebase.service"

import Loading from "../Loading/Loading"
import MarketCard from "../MarketCard/MarketCard"
import MarketNavbar from "../MarketNavbar/MarketNavbar"

function MarketProducts() {
	const gender = useParams().gender

	const [isLoading, setIsLoading] = useState(true)
	const [subcategories, setSubcategories] = useState([])
	const [productsFound, setProductsFound] = useState([])

	useEffect(() => {
		setProductsFound([])
		getData("products").then((res) => {
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
			filteredProducts.length !== 0 && setProductsFound(filteredProducts)
		})
	}, [gender])

	return (
		<div className="market__container flex-column">
			<div className="marketproducts__container flex-column">
				<MarketNavbar breadcrumb={[gender]} />

				{isLoading ? (
					<Loading />
				) : (
					<div className="marketproducts__grid flex-row">

						<div className="marketproducts__filters">
							<div className="marketproducts__filters--box flex-column">
								<div className="filterbox__title"><p>Categorías</p></div>
								<ul className="flex-column">{subcategories.length !== 0 ? subcategories.map((item) => <li key={item}>{item.charAt(0).toUpperCase() + item.slice(1)}</li>) : <p>Nada encontrado</p>}</ul>
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
