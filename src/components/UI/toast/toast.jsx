import React from 'react'
import { useDispatch } from 'react-redux'
import { setStatus } from '../../../redux/reducers/views'
import { Image } from '../../image/image'

export const Toast = ({ status, elipse }) => {
	const dispatch = useDispatch()
	const resetStatus = () => {
		dispatch(setStatus("wait"))
	}

	return (
		<div>
			<Image className="toast" src={status} />
			<Image onClick={resetStatus} className="elipse" src={elipse} />
		</div>
	)
}
