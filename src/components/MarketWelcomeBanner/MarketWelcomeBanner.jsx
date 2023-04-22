import React, { useEffect, useState } from "react"
import Button from '../Button/Button'
import "./marketwelcomebanner.css"

function MarketWelcomeBanner({ title, description, image, link }) {
	const [bannerData, setBannerData] = useState({ title, description, image, link })
	const [transition, setTransition] = useState(false)
	const [initial, setInitial] = useState(true)
	const transitionTime = 2000

	const bannerStyle = {
		backgroundImage: `url(${bannerData.image})`,
		backgroundPosition: "center center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
	}

	useEffect(() => {
		if (initial === true) {
			setTimeout(() => setBannerData({ title, description, image, link }), transitionTime / 2)
			setTimeout(() => setInitial(false), transitionTime)
		} else {
			setTransition(true)
			setTimeout(() => setBannerData({ title, description, image, link }), transitionTime / 2)
			setTimeout(() => setTransition(false), transitionTime)
		}
	}, [title])

	return (
		<div className={`marketwelcome__banner flex-row`}>
			<div className={`banner__leftside flex-column ${transition && "marketwelcome__banner--transition"}`}>
				<h1>{bannerData.title}</h1>
				<p>{bannerData.description}</p>
				{
					bannerData.title !== undefined &&
				<Button primary={"black"} secondary={"white"} borderColor={"#444"} text={"Conocer más"} />
				}
			</div>

			<div className={`banner__rightside ${transition && "marketwelcome__banner--transition"}`} style={bannerStyle}></div>

			<div className="banner__divider1"></div>
			<div className="banner__divider2"></div>
		</div>
	)
}

export default MarketWelcomeBanner
