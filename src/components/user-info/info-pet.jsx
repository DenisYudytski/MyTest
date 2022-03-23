import React from 'react'

export const InfoPet = ({ pet }) => {
	return (
		<div className="info-pet">
			{/* <Image margin="12px" src={dogFood} /> */}
			<strong className='pet'>Домашнее животное: </strong>
			{pet}
		</div>
	)
}
