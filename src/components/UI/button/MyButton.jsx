import './MyButton.css'

export const MyButton = ({ children, width, height, className, ...props }) => {
	return (
		<button style={{ width: `${width}`, height: `${height}` }} className={`MyButton ${className}`} {...props}>
			{children}
		</button>
	)
}
