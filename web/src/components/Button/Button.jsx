import "./button.css"
import React, { useState } from "react"

function Button({ primary, secondary, text, borderColor, handleCartAdd }) {
	const [isHover, setIsHover] = useState(false)

	const buttonStyle = {
		backgroundColor: isHover ? primary : secondary,
		color: isHover ? secondary : primary,
        border: isHover ? `2px solid ${secondary}` : `2px solid ${borderColor}`
    }

	return (
		<div className="button" style={buttonStyle} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} onClick={handleCartAdd}>
			{text}
		</div>
	)
}

export default Button
