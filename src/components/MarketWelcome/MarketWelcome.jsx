import "./marketwelcome.css"
import React, { useEffect, useState } from "react"

import MarketWelcomeCard from "../MarketWelcomeCard/MarketWelcomeCard"
import MarketWelcomeBanner from "../MarketWelcomeBanner/MarketWelcomeBanner"
import Loading from "../Loading/Loading"

function MarketWelcome({ data }) {
	const [banner, setBanner] = useState({})
	const [cardsData, setCardsData] = useState([])

	useEffect(() => {
		let bannerProducts = []
		let cards = []

		if (data.length !== 0) {
			Object.keys(data[0]).forEach((key) => key !== "uid" && bannerProducts.push(data[0][key]))
			Object.keys(data[1]).forEach((key) => key !== "uid" && cards.push(data[1][key]))

			setCardsData(cards)
			setBanner(bannerProducts[0])

			let i = 1

			setInterval(() => {
				setBanner(bannerProducts[i])

				if (i == bannerProducts.length - 1) {
					i = 0
				} else {
					i++
				}
			}, 10000)
		}
	}, [data])

	return (
		<div className="marketwelcome__container flex-column">
			{data.length === 0 ? (
				<Loading />
			) : (
				<>
					<MarketWelcomeBanner title={banner.title} description={banner.description} image={banner.image} />

					<div className="marketwelcome__cardscontainer flex-row">
            {
              cardsData.map(item => <MarketWelcomeCard title={item.title} image={item.image} />)
            }
					</div>
				</>
			)}
		</div>
	)
}

export default MarketWelcome
