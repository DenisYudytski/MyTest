import React from 'react'
import { useSelector } from 'react-redux'
import { Toast } from '../UI/toast/toast'
import { Loader } from '../UI/loader/loader'
import { ReviewContent } from '../review-content/review-content'
import { ReviewHeader } from '../review-header/review-header'
import error from '../../img/svg/error.svg'
import success from '../../img/svg/success.svg'
import elipseError from '../../img/fail.png'
import elipseSuccess from '../../img/success.png'
import './review-list.css'


export const ReviewList = () => {

	const status = useSelector(state => state.views.status)

	return (
		<div className='review-list'>
			<ReviewHeader />
			<ReviewContent />
			{status === "error" && <Toast status={error} elipse={elipseError} />}
			{status === "load" && <Toast status={success} elipse={elipseSuccess} />}
			{status === "loading" && <Loader />}
		</div>
	)
}
