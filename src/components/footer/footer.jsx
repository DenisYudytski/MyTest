import React from 'react'
import { Image } from '../image/image'
import vk from '../../img/svg/VK.svg'
import reddit from '../../img/svg/reddit.svg'
import telegram from '../../img/svg/telegram.svg'
import './footer.css'
import { SocialLogo } from '../UI/social-logo/social-logo'

export const Footer = () => {
	return (
		<footer className='footer'>
			<div className="footer-copiryte">© iLINK ACADEMY. ALL RIGHTS RESERVED. 2022</div>
			<div className="footer-social">
				<SocialLogo margin="20.5px" src={vk} to="https://m.vk.com/ilinkdev?from=group" />
				<SocialLogo margin="20.5px" src={reddit} />
				<SocialLogo src={telegram} />
			</div>
		</footer>
	)
}
