import React from "react"
import "./slidercard.css"

function SliderCard({ image, selectedProduct, cardClickHandler, position }) {
	const isSelected = selectedProduct.productImage == image

	const cardStyle = {
		backgroundImage: `url(${image})`,
		backgroundPosition: "center center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		filter: isSelected ? `grayscale(0%)` : `grayscale(100%)`,
	}

	return <div className="slidercard__container" style={cardStyle} onClick={() => cardClickHandler(position)}></div>
}

export default SliderCard
