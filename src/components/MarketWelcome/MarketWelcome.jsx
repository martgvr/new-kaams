import "./marketwelcome.css"
import React, { useEffect, useState } from "react"

import Loading from "../Loading/Loading"
import MarketNavbar from "../MarketNavbar/MarketNavbar"
import MarketWelcomeCard from "../MarketWelcomeCard/MarketWelcomeCard"
import MarketWelcomeBanner from "../MarketWelcomeBanner/MarketWelcomeBanner"

function MarketWelcome({ data }) {
	const [banner, setBanner] = useState({})
	const [cardsData, setCardsData] = useState([])

	useEffect(() => {
		let bannerProducts = []
		let cards = []

		if (data.length !== 0) {
			Object.keys(data[1]).forEach((key) => key !== "uid" && cards.push(data[1][key]))
			Object.keys(data[0]).forEach((key) => key !== "uid" && bannerProducts.push(data[0][key]))

			setCardsData(cards)
			setBanner(bannerProducts[0])

			let i = 1
			setInterval(() => {
				setBanner(bannerProducts[i])
				i = (i == bannerProducts.length - 1) ? 0 : i + 1;
			}, 8000)
		}
	}, [data])

	return (
		<div className="marketwelcome__container flex-column">
			<MarketNavbar breadcrumb={['Novedades']}/>
			
			{ data.length === 0 ? (
				<Loading />
			) : (
				<>
					<MarketWelcomeBanner title={banner.title} description={banner.description} image={banner.image} link={banner.link} />

					<div className="marketwelcome__cardscontainer flex-row">
						{
							cardsData.map(item => <MarketWelcomeCard key={item.title} title={item.title} image={item.image} link={item.link} />)
						}
					</div>
				</>
			) }
		</div>
	)
}

export default MarketWelcome
