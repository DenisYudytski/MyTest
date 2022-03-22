import React from 'react'

export const Image = ({ margin, ...props }) => {
	return (
		<img style={{ display: 'block', marginRight: `${margin}` }} {...props} />
	)
}
