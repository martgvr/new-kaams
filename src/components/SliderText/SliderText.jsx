import React from "react"

function SliderText({ seasonName, seasonYear, productDescription }) {
	return (
		<>
			<h1>{seasonName}</h1>
			<h2>{seasonYear}</h2>
			<div className="slider__leftside--divider"></div>
            <p>{productDescription}</p>
		</>
	)
}

export default SliderText
