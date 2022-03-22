import React from 'react'
import { Image } from '../image/image'

export const InfoInfo = ({ image, city, age }) => {
	return (
		<div className="info-info">
			<div className="info-item"><strong>Город: </strong>{city}</div>
			<div className="info-item"><strong>Пол: </strong><span className='sex-item'>Мужчина</span></div>
			<div className="info-item"><strong>Возраст: </strong>{age}</div>
		</div>
	)
}
