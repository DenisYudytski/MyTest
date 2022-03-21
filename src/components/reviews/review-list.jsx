import React from 'react'
import { ReviewContent } from '../review-content/review-content'
import { ReviewHeader } from '../review-header/review-header'
import './review-list.css'

export const ReviewList = () => {
	return (
		<div className='review-list'>
			<ReviewHeader />
			<ReviewContent />
		</div>
	)
}
