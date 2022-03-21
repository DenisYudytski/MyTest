import React from 'react'
import { Image } from '../../components/image/image'
import { ReviewList } from '../../components/reviews/review-list'
import { UserCard } from '../../components/userCard/userCard'

import './home.css'

export const Home = () => {
	return (
		<div className='home'>
			<div className="wrapper">
				<h1 className='title'>Добро пожаловать в академию!</h1>
				<UserCard className='userCard' />
				<ReviewList />
			</div>
		</div>
	)
}