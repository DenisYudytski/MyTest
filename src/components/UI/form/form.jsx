import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addView } from '../../../redux/reducers/views'
import { formatDate } from '../../../utils'
import { MyButton } from '../button/MyButton'
import { MyInput } from '../input/input'
import { MyTextArea } from '../text-area/text-area'
import './form.css'

export const MyForm = () => {

	const [inputValue, setInputValue] = useState('')
	const [areaValue, setAreaValue] = useState('')
	const dispatch = useDispatch()

	const sendView = () => {
		const date = new Date()
		const view = {
			id: Date.now(),
			image: '',
			name: inputValue,
			content: areaValue,
			date: formatDate(date)

		}
		dispatch(addView(view))
		setInputValue('')
		setAreaValue('')
	}
	return (
		<form onSubmit={(e) => e.preventDefault()}>
			<MyInput
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				imageFlag={true}
				title='Как вас зовут?'
				type="text"
			/>
			<MyTextArea
				value={areaValue}
				onChange={(e) => setAreaValue(e.target.value)}
				maxLength="200"
				title="Все ли вам понравилось?"
			/>
			<div className='send-block'>
				<MyButton
					onClick={sendView}
					width="203px"
					height="53px"
				>
					Отправить отзыв
				</MyButton>
				<div className='send-about'>Все отзывы проходят модерацию в течение 2 часов</div>
			</div>
		</form>
	)
}
