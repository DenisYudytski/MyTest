import React from 'react'
import './slider.css'

export const BtnSlider = ({ moveSlide, direction }) => {
	return (
		<button
			onClick={moveSlide}
			className={direction === "next" ? 'btn-slide next' :
				'btn-slide prev'}
		>
			{direction}
		</button>
	)
}

