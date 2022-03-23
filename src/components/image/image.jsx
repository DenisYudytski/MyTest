import React from 'react'
import './image.css'

export const Image = ({ margin, ...props }) => {
	return (

		<img style={{ display: 'block', marginRight: `${margin}` }} {...props} />

	)
}
