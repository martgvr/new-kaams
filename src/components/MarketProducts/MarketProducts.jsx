import "./marketproducts.css"
import { useEffect, useState } from "react"
import { getData } from "../../services/firebase.service"
import { useParams, Link, useSearchParams, redirect, useNavigate } from "react-router-dom"

import Loading from "../Loading/Loading"
import MarketCard from "../MarketCard/MarketCard"
import MarketNavbar from "../MarketNavbar/MarketNavbar"

function MarketProducts() {
	const navigate = useNavigate()
	const gender = useParams().gender
	
	const [data, setData] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [categories, setCategories] = useState([])
	const [searchParams, setSearchParams] = useSearchParams()
	const [productsFound, setProductsFound] = useState([])

	useEffect(() => {
		getData("products").then(res => setData(res))
	}, [])
	
	useEffect(() => {
		setProductsFound([])
		let categoriesFound = []
		const filteredProducts = data.filter((item) => item.gender == gender)

		filteredProducts.map((item) => {
			for (const property in item) {
				if (property == "category") {
					const checkExist = categoriesFound.find((item) => item == item[property])
					checkExist === undefined && categoriesFound.push(item[property])
				}
			}
		})

		setIsLoading(false)
		setCategories(categoriesFound)

		filteredProducts.length !== 0 && setProductsFound(filteredProducts)
	}, [data, gender])
	
	let getType = searchParams.get('type')

	useEffect(() => {
		getType = searchParams.get('type')
		
		if (getType !== null) {
			const getByType = data.filter(item => (item.category == getType) && (item.gender == gender))
			setProductsFound(getByType)
		} else {
			const getByType = data.filter(item => item.gender == gender)
			setProductsFound(getByType)
		}
	}, [getType])

	const styledType = { backgroundColor: 'black', color: 'white' }

	const selectHandler = (event) => navigate(event.target.value == 'all' ? '' : `?type=${event.target.value}`)

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

								<ul className="filterbox__categories--desktop flex-column">
									<Link to={``} style={getType == null ? styledType : {}}>
										<li>Todo</li>
									</Link>
										{
										categories.length !== 0 ? 
											categories.map((item) => 
												<Link to={`?type=${item}`} key={item} style={getType == item ? styledType : {}}>
													<li>{item.charAt(0).toUpperCase() + item.slice(1)}</li>
												</Link>) 
											: 
											<p>Nada encontrado</p>
										}
								</ul>

								<select className="filterbox__categories--mobile" onChange={selectHandler}>
									<option value="all">Todo</option>)
									{
										categories.length !== 0 ? 
											categories.map((item) => 
												<option value={item}>{item.charAt(0).toUpperCase() + item.slice(1)}</option>
											)
											: 
											<p>Nada encontrado</p>
									}
								</select>
							</div>

						</div>

						<div className="marketproducts__content flex-row">
							{
								productsFound.length !== 0 ? 
										productsFound.map((item) => 
											<Link to={`${item.uid}`} key={item} state={{ data: data }}>
												<MarketCard key={item.name} image={item.image} name={item.name} price={item.price} />
											</Link>)
										: 
										<p>Nada encontrado</p>
							}
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default MarketProducts
