import React from 'react'
import { Image } from '../../components/image/image'
import { ReviewList } from '../../components/reviews/review-list'
import { UserCard } from '../../components/userCard/userCard'
import spiral from '../../img/svg/Spiral.svg'

import './home.css'

export const Home = () => {
	return (
		<div className='home'>
			<Image className="spiral" src={spiral} />
			<div className="wrapper">
				<h1 className='title'>Добро пожаловать в академию!</h1>
				<UserCard className='userCard' />
			</div>
			<ReviewList />
		</div>
	)
}
