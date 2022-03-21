import React from 'react'
import { MyButton } from '../UI/button/MyButton'
import plus from '../../img/svg/plus.svg'
import './review-header.css'
import { Image } from '../image/image'

export const ReviewHeader = () => {
	return (
		<div className='review-header'>
			<h2 className='review-title'>Отзывы</h2>
			<MyButton
				className='add-review-btn'
				width='220px'
				height='52px'
			>
				<Image src={plus} />
				Добавить отзыв
			</MyButton>
		</div>
	)
}
