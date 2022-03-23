import React from 'react'
import { Image } from '../../image/image'
import { ReactComponent as Loading } from '../../../img/svg/loading.svg'
import './loader.css'

export const Loader = () => {
	return (
		<div className='loader-wrapper'>
			<Loading />
		</div>
	)
}
