import React from 'react'

export const InfoHeader = ({ name, birth }) => {
	return (
		<div className="info-header">
			<div className="header-name">{name}</div>
			<div className="header-birthday">{birth}</div>
		</div>
	)
}
