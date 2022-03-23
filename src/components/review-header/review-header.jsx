import React, { useState } from 'react'
import { MyButton } from '../UI/button/MyButton'
import plus from '../../img/svg/plus.svg'
import './review-header.css'
import { Image } from '../image/image'
import { MyModal } from '../UI/modal/MyModal'
import { MyForm } from '../UI/form/form'

export const ReviewHeader = () => {
	const [visible, setVisible] = useState(false)

	return (
		<div className='review-header'>
			<h2 className='review-title'>Отзывы</h2>
			<MyButton
				onClick={() => setVisible(true)}
				className='add-review-btn'
				width='220px'
				height='52px'
			>
				<Image margin="10px" src={plus} />
				Добавить отзыв
			</MyButton>
			{visible ?
				<MyModal modalVisible={setVisible} title='Отзыв'>
					<MyForm modalVisible={setVisible} />
				</MyModal>
				: null}
		</div>
	)
}
