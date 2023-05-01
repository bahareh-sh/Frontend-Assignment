function Button( { color, text, onClick }: {color: string; text: string; onClick: any} ) {
	return (
		<button 
			onClick={onClick} 
			className='btn' 
			style={{backgroundColor: color}}>
			{text}
		</button>
	)
}

export default Button