import React from 'react'
import { Image } from '../image/image'
import dogFood from '../../img/svg/DogFood.svg'

export const InfoPet = ({ pet }) => {
	return (
		<div className="info-pet">
			{/* <Image margin="12px" src={dogFood} /> */}
			<strong className='pet'>Домашнее животное: </strong>
			{pet}
		</div>
	)
}
