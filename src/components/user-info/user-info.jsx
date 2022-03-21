import React from 'react'
import { InfoAbout } from './info-about'
import { InfoAdd } from './info-add'
import { InfoHeader } from './info-header'
import { InfoInfo } from './info-info'
import { InfoPet } from './info-pet'

export const UserInfo = ({ image }) => {
	return (
		<div className="userInfo">
			<InfoHeader name='Денис Юдыцкий' birth='01.04.1998' />
			<InfoInfo image={image} age='23' city='Томск' />
			<InfoAbout about='я кринж я кринж я кринж я кринж я кринж я кринж я кринж я кринж я кринж я кринж я кринж я кринж я кринж я кринж я кринж я кринж я кринж я кринж я кринж я кринж я кринж я кринж я кринж я кринж я кринж я кринж я кринж я кринж я кринж я кринж я кринж я кринж' />
			<InfoAdd add='АХАХАХАХАХАХ' />
			<InfoPet pet='Нет' />
		</div>
	)
}
