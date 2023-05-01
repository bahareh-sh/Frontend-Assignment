import { useUpdateVegetableMutation } from "app/api"
import { useState } from "react"
import { Vegetable } from "types/Vegetable";
interface EditItemProps{
	data?: Vegetable;
	setShowEditForm: any
}

function EditItem({setShowEditForm, data} : EditItemProps) {

	const [ updateVegetable ] = useUpdateVegetableMutation()
	const [name, setName] = useState(data?.name)
	const [description, setDiscription] = useState(data?.description)
	const onSubmit = (e:any) => { 
		e.preventDefault();
		if(!name) {
			alert('Please enter a name')
			return
		}
		if(!description) {
			alert('Please enter a description')
			return
		}
		if(data)
			updateVegetable({id:data.id,name:name,description:description}) 

		setName('')
		setDiscription('')

		setShowEditForm(false)
	}

	return (
		<form className="add-form" onSubmit={onSubmit}>
			<div className="form-control">
				<label>Name</label>
				<input 	
					type="text" 
					placeholder="Edit Vegetable Name" 
					value={name} 
					onChange={(e) => setName(e.target.value)}/>
			</div>

			<div className="form-control">
				<label>description</label>
				<input 
					type="text" 
					placeholder="Edit Vegetable description" 
					value={description} 
					onChange={(e) => setDiscription(e.target.value)}
				/>
			</div>

			<input type="submit" value='Save Item'  className="btn btn-block"  />
		</form>
	)
}
 

export default EditItem