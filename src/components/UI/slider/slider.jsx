import React, { useState } from 'react'
import { ReviewBox } from '../../review-item/review-box'
import './slider.css'
import { BtnSlider } from './btn-slider'

export const Slider = ({ views }) => {
	const [slideIndex, setSlideIndex] = useState(1)

	const nextSlide = () => {
		if (slideIndex !== views.length) {
			setSlideIndex(slideIndex + 1)
		} else if (slideIndex === views.length) {
			setSlideIndex(1)
		}
	}

	const prevSlide = () => {
		if (slideIndex !== 1) {
			setSlideIndex(slideIndex - 1)
		} else if (slideIndex === 1) {
			setSlideIndex(views.length)
		}
	}

	return (
		<div className='container-slider'>
			{views.map((view, index) =>
				<div className={slideIndex === index + 1 || slideIndex === index + 2 ? "slide active-anim" : "slide"}>
					<ReviewBox
						key={view.id}
						index={index}
						views={views}
					/>
				</div >

			)}

			<div className="slides-buttons">
				<BtnSlider moveSlide={nextSlide} direction="prev" />
				<BtnSlider moveSlide={prevSlide} direction="next" />
			</div>

		</div>
	)
}
