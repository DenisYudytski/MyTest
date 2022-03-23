import React from 'react'
import { useSelector } from 'react-redux'

import { Slider } from '../UI/slider/slider'
import './review-content.css'

export const ReviewContent = () => {
	const views = useSelector(state => state.views.views)

	return (
		<div className='review-content'>
			<Slider views={views} />

		</div>
	)
}
