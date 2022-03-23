import React from 'react'
import { Image } from '../../image/image'
import x from '../../../img/svg/x.svg'
import './MyModal.css'

export const MyModal = ({ title, children, modalVisible }) => {


	return (
		<div className='modal'>
			<div onClick={() => modalVisible(false)} className="modal-wrapper">
				<div onClick={e => e.stopPropagation()} className="modal-content">
					<div className='modal-title'>{title}</div>
					<div onClick={() => modalVisible(false)} className='exit-btn'><Image src={x} /></div>
					{children}
				</div>
			</div>

		</div>
	)
}
