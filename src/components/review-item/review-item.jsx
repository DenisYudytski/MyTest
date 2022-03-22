import React from 'react'
import { Image } from '../image/image'
import me from '../../img/Me.jpg'
import './review-item.css'

export const ReviewItem = ({ view }) => {
	// console.log(view);
	return (
		<div className='review-item'>
			<div className="review-item__header">
				<Image src={me} height={52} width={52} />
				<div className='name'>{view.name}</div>
				<div className="date">{view.date}</div>
			</div>
			<div className="review-item__content">{view.content}</div>
		</div>
	)
}
