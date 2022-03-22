import React from 'react'
import { ReviewItem } from './review-item'
import './review-box.css'

export const ReviewBox = ({ views, index }) => {

	return (

		<div className='review-box'>
			{index !== views.length ? <ReviewItem margin="24px" view={views[index]} /> : null}
			{views[index + 1] ?
				<ReviewItem image={views.image} view={views[index + 1]} /> : null}




		</div>


	)
}
