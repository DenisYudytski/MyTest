import React from 'react'
import { ReviewItem } from '../../review-item/review-item'
import './slider.css'

export const Slider = () => {
	return (
		<div className='slider middle'>
			<div className="slides">
				<input type="radio" name='r' id='r1' checked />
				<input type="radio" name='r' id='r2' checked />
				<input type="radio" name='r' id='r3' checked />

				<div className="slide"><ReviewItem /></div>
				<div className="slide"><ReviewItem /></div>
				<div className="slide"><ReviewItem /></div>
				<div className="slide"><ReviewItem /></div>
			</div>
			<div className="navigation">
				<label for="r1" className='bar'></label>
				<label for="r2" className='bar'></label>
				<label for="r3" className='bar'></label>
			</div>
		</div>
	)
}
