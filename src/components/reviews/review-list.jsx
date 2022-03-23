import React from 'react'
import { useSelector } from 'react-redux'

import { ReviewContent } from '../review-content/review-content'
import { ReviewHeader } from '../review-header/review-header'
import './review-list.css'

export const ReviewList = () => {
	const status = useSelector(state => state.views.status)





	return (
		<div className='review-list'>
			<ReviewHeader />
			<ReviewContent />
			{status === "error" && <div>Не загрузило</div>}
			{status === "loading" && <div>Загрузило</div>}
		</div>
	)
}
