import React from 'react'
import { Image } from '../image/image'
import me from '../../img/Me.jpg'
import sex from '../../img/svg/sex.svg'
import './userCard.css'
import { UserInfo } from '../user-info/user-info'

export const UserCard = () => {
	return (
		<div className='userCard'>
			<div className="userCard-wrapper">
				<div className="user-image">
					<Image src={me} width='519' height='383' />
				</div>
				<UserInfo image={sex} />
			</div>
		</div>
	)
}
