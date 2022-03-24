import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { Slider } from '../UI/slider/slider'
import { SliderOneSlide } from '../UI/slider/slider-one-slide'
import './review-content.css'

export const ReviewContent = () => {
	const views = useSelector(state => state.views.views)
	const screenWidth = window.screen.width

	return (
		<div className='review-content'>
			{screenWidth > 992 ?
				<Slider views={views} />
				:
				<SliderOneSlide views={views} />}
		</div>
	)
}
