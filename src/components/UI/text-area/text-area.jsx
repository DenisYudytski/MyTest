import React from 'react'
import './text-area.css'

export const MyTextArea = ({ title, ...props }) => {
	return (
		<div>
			<p>{title}</p>
			<textarea className='text-area' {...props}></textarea>
		</div>

	)
}
