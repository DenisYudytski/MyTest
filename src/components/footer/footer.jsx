import React from 'react'
import { Image } from '../image/image'
import vk from '../../img/svg/VK.svg'
import reddit from '../../img/svg/reddit.svg'
import telegram from '../../img/svg/telegram.svg'
import './footer.css'

export const Footer = () => {
	return (
		<footer className='footer'>
			<div className="footer-copiryte">© iLINK ACADEMY. ALL RIGHTS RESERVED. 2022</div>
			<div className="footer-social">
				<Image margin="20.5px" src={vk} />
				<Image margin="20.5px" src={reddit} />
				<Image src={telegram} />
			</div>
		</footer>
	)
}
