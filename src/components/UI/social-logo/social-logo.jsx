import React from 'react'
import { Image } from '../../image/image'

export const SocialLogo = ({ to = '#', ...props }) => {
	return (
		<a href={to}><Image {...props} /></a>
	)
}
