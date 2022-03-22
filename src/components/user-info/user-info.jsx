import React from 'react'
import { InfoAbout } from './info-about'
import { InfoAdd } from './info-add'
import { InfoHeader } from './info-header'
import { InfoInfo } from './info-info'
import { InfoPet } from './info-pet'

export const UserInfo = ({ image, user }) => {
	return (
		<div className="userInfo">
			<InfoHeader name={user.name} birth={user.birth} />
			<InfoInfo image={image} age='23' city='Томск' />
			<InfoAbout about={user.about} />
			<InfoAdd add={user.add} />
			<InfoPet pet={user.pet} />
		</div>
	)
}
