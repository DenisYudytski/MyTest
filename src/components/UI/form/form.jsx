import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addView, setStatus } from '../../../redux/reducers/views'
import { formatDate } from '../../../utils'
import { MyButton } from '../button/MyButton'
import { MyInput } from '../input/input'
import { MyTextArea } from '../text-area/text-area'
import info from '../../../img/svg/info.svg'
import './form.css'
import { Image } from '../../image/image'

export const MyForm = ({ modalVisible }) => {

	const [inputValue, setInputValue] = useState('')
	const [areaValue, setAreaValue] = useState('')
	const [nameError, setNameError] = useState(false)
	const [areaError, setAreaError] = useState(false)
	const [nameErrorMessage, setNameErrorMessage] = useState('Поле не может быть пустым')
	const [areaErrorMessage, setAreaErrorMessage] = useState('Поле не может быть пустым')
	const [formValid, setFormValid] = useState(false)
	const dispatch = useDispatch()



	useEffect(() => {
		if (nameErrorMessage || areaErrorMessage) {
			setFormValid(false)
		} else {
			setFormValid(true)
		}
	}, [nameErrorMessage, areaErrorMessage])

	const sendView = () => {
		try {
			dispatch(setStatus("loading"))
			const date = new Date()
			// let view          Что бы вызвать ошибку, вместо объекта view объявлял переменную и не инициализировал
			const view = {
				id: Date.now(),
				image: '',
				name: inputValue,
				content: areaValue,
				date: formatDate(date)
			}
			modalVisible(false)
			if (view === undefined) {
				throw new Error
			}
			dispatch(addView(view))
			setTimeout(() => {
				dispatch(setStatus("load"))
			}, 1000)

		} catch (error) {
			setTimeout(() => {
				dispatch(setStatus('error'))
			})

		}


	}
	const blurHandler = (e) => {
		switch (e.target.name) {
			case 'user':
				if (inputValue === '') {
					setNameError(true)
				}
				break
			case 'view':
				if (areaValue === '') {
					setAreaError(true)
				}
				break
			default:
				break
		}
	}
	const onChangeInput = (e) => {
		setInputValue(e.target.value)
		if (e.target.value.length >= 30) {
			setNameError(true)
			setNameErrorMessage('Слишком длинное имя')
		} else if (e.target.value.length > 0) {
			setNameErrorMessage('')
			setNameError(false)
		} else {
			setNameErrorMessage('Поле не может быть пустым')
		}
	}
	const onChangeArea = (e) => {
		setAreaValue(e.target.value)
		if (e.target.value !== '') {
			setAreaErrorMessage('')
			setAreaError(false)
		} else {
			setAreaError(true)
			setAreaErrorMessage('Поле не может быть пустым')
		}
	}
	return (
		<form className='form' onSubmit={(e) => e.preventDefault()}>
			<p>Как вас зовут?</p>
			{(nameError && nameErrorMessage) && <p style={{ color: 'red' }}>{nameErrorMessage}</p>}
			<MyInput
				name='user'
				onChange={onChangeInput}
				onBlur={blurHandler}
				error={nameError}
				value={inputValue}
				imageFlag={true}
				placeholder="Имя Фамилия"
				type="text"
			/>
			<p>"Все ли вам понравилось?"</p>
			{(areaError && areaErrorMessage) && <p style={{ color: 'red' }}>{areaErrorMessage}</p>}
			<MyTextArea
				name='view'
				onChange={onChangeArea}
				onBlur={blurHandler}
				error={areaError}
				value={areaValue}
				length={areaValue.length}
				placeholder="Напишите пару слов о вашем опыте"
				maxLength="200"
			/>
			<div className='send-block'>
				<MyButton
					disabled={!formValid}
					onClick={sendView}
					width="203px"
					height="53px"
				>
					Отправить отзыв
				</MyButton>
				<div className='send-moderation'>
					<Image src={info} />
					<div className='send-about'>Все отзывы проходят модерацию в течение 2 часов</div>
				</div>
			</div>
		</form>
	)
}
