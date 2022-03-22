import React from 'react'
import { ReviewItem } from './review-item'
import './review-box.css'

export const ReviewBox = ({ views, index }) => {
	console.log(views);
	return (
		<div className='review-box'>
			<ReviewItem view={views[index]} />
			{views[index + 1] &&
				<ReviewItem view={views[index + 1]} />
			}

		</div>
	)
}
