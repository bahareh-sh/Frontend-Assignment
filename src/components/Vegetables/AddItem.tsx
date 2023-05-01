import { useAddVegetableMutation } from "app/api";
import { useState } from "react"
interface AddItemProps {
	setShowAddForm: any
}

function AddItem( { setShowAddForm } : AddItemProps) {
	const [name, setName] = useState('')
	const [description, setDescription] = useState('')
	const [ addVegetable ] = useAddVegetableMutation()

	const onSubmit = (e:any) => {

		e.preventDefault();
		if(!name) {
			alert('Please add a name')
			return
		}

		if(!description) {
			alert('Please add a description')
			return
		}

		// Add Item
		addVegetable({name:name,description:description}) 
		 
		setName('')
		setDescription('')

		setShowAddForm(false)
	}

	return (
		<form className="add-form" onSubmit={onSubmit}>
			<div className="form-control">
				<label>Name</label>
				<input 	
					type="text" 
					placeholder="Add Vegetable Name" 
					value={name} 
					onChange={(e) => setName(e.target.value)}/>
			</div>

			<div className="form-control">
				<label>description</label>
				<input 
					type="text" 
					placeholder="Add Vegetable description" 
					value={description} 
					onChange={(e) => setDescription(e.target.value)}
				/>
			</div>

			<input type="submit" value='Save Item'  className="btn btn-block"  />
		</form>
	)
}

export default AddItem