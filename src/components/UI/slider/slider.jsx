import React, { useState } from 'react'
import { ReviewBox } from '../../review-item/review-box'
import { BtnSlider } from './btn-slider'
import './slider.css'

export const Slider = ({ views }) => {
	const [slideIndex, setSlideIndex] = useState(1)


	const nextSlide = () => {
		if (slideIndex !== views.length && (slideIndex + 2) <= views.length) {
			setSlideIndex(slideIndex + 2)

		} else if (slideIndex === views.length - 1 || slideIndex === views.length) {
			setSlideIndex(1)
		}
	}

	const prevSlide = () => {
		if (slideIndex !== 1 && slideIndex - 2 >= 1) {
			setSlideIndex(slideIndex - 2)
		} else if (slideIndex === 1 && views.length % 2 === 0) {
			setSlideIndex(views.length - 1)
		} else {
			setSlideIndex(views.length)
		}
	}
	return (
		<div className='slider'>
			<div className='container-slider'>
				{views.map((view, index) => index % 2 === 0 ?
					<div className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
						<ReviewBox
							key={view.name}
							index={index}
							views={views}
						/>
					</div >
					: null
				)}
			</div>
			<div className="slides-buttons">
				<BtnSlider moveSlide={prevSlide} direction="prev" />
				<BtnSlider moveSlide={nextSlide} direction="next" />
			</div>
		</div>
	)
}
