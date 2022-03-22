import React from 'react'
import './MyModal.css'

export const MyModal = ({ title, children, modalVisible }) => {


	return (
		<div className='modal'>
			<div onClick={() => modalVisible(false)} className="modal-wrapper">
				<div onClick={e => e.stopPropagation()} className="modal-content">
					<div className='modal-title'>{title}</div>
					<div onClick={() => modalVisible(false)} className='exit-btn'>X</div>
					{children}
				</div>
			</div>

		</div>
	)
}
