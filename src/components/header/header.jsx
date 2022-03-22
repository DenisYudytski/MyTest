import React from 'react'
import { Image } from '../image/image'
import me from '../../img/Me.jpg'
import ilink from '../../img/svg/ilink.svg'
import academy from '../../img/svg/ACADEMY.svg'

import './header.css'
import { MyButton } from '../UI/button/MyButton'

export const Header = () => {
	return (
		<header className='header'>
			<div className="header-image">
				<Image src={me} alt="эх..." height={52} width={52} margin="20px" />
				<span className='image__title'>Денис Юдыцкий</span>
			</div>
			<div className="header-logo">
				<Image src={ilink} />
				<Image src={academy} />
			</div>
			<MyButton width="227px" height='52px'>
				Панель управления
			</MyButton>
		</header >
	)
}
