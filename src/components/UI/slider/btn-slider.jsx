import React from 'react'
import './slider.css'
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi'

export const BtnSlider = ({ moveSlide, direction }) => {
	return (
		<button
			onClick={moveSlide}
			className={direction === "next" ? 'btn-slide next' :
				'btn-slide prev'}
		>
			{direction === "next" ? <FiArrowRight /> : <FiArrowLeft />}

		</button>
	)
}

