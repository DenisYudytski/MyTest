import React from 'react'
import { Slider } from '../UI/slider/slider'
import { views } from '../../MOK/views'
import './review-content.css'

export const ReviewContent = () => {
	return (
		<div className='review-content'>
			<Slider views={views} />
		</div>
	)
}
