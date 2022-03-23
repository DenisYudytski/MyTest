import React from 'react'
import { MyButton } from '../button/MyButton'
import plus from '../../../img/svg/plus.svg'
import './input.css'
import { Image } from '../../image/image'

export const MyInput = ({ error, title, imageFlag, ...props }) => {
	return (
		<div>
			<div className="input-wrapp">
				<input className={!error ? 'input' : "input error"} {...props} />
				{imageFlag ?
					<MyButton
						width='217px'
						height='52px'
					>
						<Image margin="10px" src={plus} />
						Загрузить фото
					</MyButton>
					:
					null}
			</div>

		</div>

	)
}
