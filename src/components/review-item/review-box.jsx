import React from 'react'
import { ReviewItem } from './review-item'
import buba from '../../img/buba.png'
import margo from '../../img/Margo.png'
import dima from '../../img/Dima.png'
import './review-box.css'


export const ReviewBox = ({ views, index }) => {

	const images = [buba, , margo, dima]
	return (

		<div className='review-box'>
			{index !== views.length ? <ReviewItem image={images[index]} margin="24px" view={views[index]} /> : null}
			{views[index + 1] ?
				<ReviewItem image={images[index + 1]} view={views[index + 1]} /> : null}




		</div>


	)
}
