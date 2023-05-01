import { vegetables } from 'app/mocks/vegetables'
import React from 'react'
import Button from './Button'
interface HeaderProps{
	title: string,
	toggleShowAddForm: any,
	showAddForm: any
}

function Header({title, toggleShowAddForm, showAddForm}: HeaderProps) {

	return (
		<header className='header'> 
			<h1>{title}</h1>
			<Button 
				color={showAddForm ? 'red' : 'green'} 
				text={showAddForm ? 'close' : 'Add'}
				onClick={toggleShowAddForm}
			/>
		</header>
	)
}

export default Header