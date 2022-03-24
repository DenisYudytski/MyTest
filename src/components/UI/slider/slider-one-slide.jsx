import React, { useState } from 'react'
import { ReviewItem } from '../../review-item/review-item'
import { BtnSlider } from './btn-slider'
import buba from '../../../img/buba.png'
import margo from '../../../img/Margo.png'
import dima from '../../../img/Dima.png'
import './slider.css'

export const SliderOneSlide = ({ views }) => {
	const [slideIndex, setSlideIndex] = useState(1)
	const images = [buba, undefined, margo, dima]

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
		<div className='slider'>
			<div className='container-slider'>
				{views.map((view, index) =>
					<div className={slideIndex === index + 1 ? "slideOne active-anim" : "slideOne"}>
						<ReviewItem
							image={images[index]}
							key={view.name}
							view={view}
						/>
					</div >
				)}
			</div>
			<div className="slides-buttons">
				<BtnSlider moveSlide={prevSlide} direction="prev" />
				<BtnSlider moveSlide={nextSlide} direction="next" />
			</div>
		</div>
	)
}
