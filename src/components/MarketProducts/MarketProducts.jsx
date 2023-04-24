import "./marketproducts.css"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getData } from "../../services/firebase.service"

import MarketCard from "../MarketCard/MarketCard"
import MarketNavbar from "../MarketNavbar/MarketNavbar"

function MarketProducts() {
	const gender = useParams().gender

	const [subcategories, setSubcategories] = useState([])
	const [productsFound, setProductsFound] = useState([])

	useEffect(() => {
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
			filteredProducts.length !== 0 ? setProductsFound(filteredProducts) : console.log("Nada encontrado")
			console.log(productsFound);
		})
	}, [gender])

	return (
		<div className="market__container flex-column">
			<div className="marketproducts__container flex-column">
				<MarketNavbar breadcrumb={[gender]} />

				<div className="flex-row">
					<div className="marketproducts__filters">
						<div className="marketproducts__filters--box">
							<ul>
								{
								subcategories.length !== 0 ? 
									subcategories.map((item) => <p key={item}>{item.charAt(0).toUpperCase() + item.slice(1)}</p>) 
									: 
									<p>Nada encontrado</p>
								}
							</ul>
						</div>
					</div>

					<div className="marketproducts__content flex-row">
						{
							productsFound.length !== 0 && productsFound.map(item => <MarketCard image={item.image} name={item.name} price={item.price} />)
						}
					</div>
				</div>
			</div>
		</div>
	)
}

export default MarketProducts
