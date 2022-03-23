import React from 'react'
import './text-area.css'

export const MyTextArea = ({ title, length, error, ...props }) => {
	return (
		<div>

			<div className='text-area__wrapper'>
				<textarea className={!error ? 'text-area' : 'text-area error'} {...props}></textarea>
				<div className={length !== 200 ? 'counter' : 'counter full'}>{length}/200</div>
			</div>

		</div>

	)
}
