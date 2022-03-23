import React from 'react'
import { Image } from '../image/image'
import def from '../../img/avatar.png'
import './review-item.css'

export const ReviewItem = ({ view, margin, image = def }) => {
	return (
		<div style={{ marginRight: `${margin}` }} className='review-item'>
			<div className="review-item__header">
				<Image src={image} height={52} width={52} />
				<div className='name'>{view.name}</div>
				<div className="date">{view.date}</div>
			</div>
			<div className="review-item__content">{view.content}</div>
		</div>
	)
}
