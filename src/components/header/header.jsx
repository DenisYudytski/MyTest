import React from 'react'
import { Image } from '../image/image'
import me from '../../img/Me.jpg'
import ilink from '../../img/svg/ilink.svg'
import academy from '../../img/svg/ACADEMY.svg'
import { MyButton } from '../UI/button/MyButton'
import './header.css'

export const Header = () => {
	const screenWidth = window.screen.width
	return (
		<header className='header'>
			<div className="header-image">
				<Image className="image-title__mob" src={me} alt="эх..." height={52} width={52} margin="20px" />
				{screenWidth > 768 ?
					<span className='image__title'>Денис Юдыцкий</span>
					:
					<span className='image__title'>Денис</span>
				}
			</div>
			<div className="header-logo">
				<Image className="image-logo__mob" src={ilink} />
				<Image className="image-logo__mob" src={academy} />
			</div>
			{screenWidth > 768 ?
				<MyButton width="227px" height='52px'>
					Панель управления
				</MyButton>
				:
				<MyButton width="36px" height="36px">
					<Image width="36" height="36" src={me} />
				</MyButton>
			}

		</header >
	)
}
