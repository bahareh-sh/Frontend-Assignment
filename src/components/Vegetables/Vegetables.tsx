import { useAddVegetableMutation, useGetVegetablesQuery, useUpdateVegetableMutation } from "app/api";
import { useAppDispatch, useAppSelector } from "app/hooks";
import Header from "components/Header";
import VegetablesList from "./VegetablesList";
import AddItem from "./AddItem";
import { useEffect, useState } from "react";
import EditItem from "./EditItem";
import { Vegetable } from "types/Vegetable";



export interface VegetablesProps {}

export const Vegetables = ({}:VegetablesProps) => {

	const {data,isLoading} = useGetVegetablesQuery();

	const [ updateVegetable ] = useUpdateVegetableMutation()

	const [visibleData, setVisibleData] = useState(data)

	const [showAddForm, setShowAddForm] = useState(false)

	const [showEditForm, setShowEditForm] = useState(false)

	const [editingItem, setEditingItem] = useState<Vegetable|undefined>()
 
	useEffect(() => { 
		setVisibleData(data)
	},[data]);

	// Delete Vegetable Item
	const deleteItem = (id: string) => {
		setVisibleData( data?.filter((item) => item.id !== id))
	}

	// Edit Item
	const onEdit = (id: string) => {
		if(data){
			setShowEditForm(true) 
			setEditingItem(data?.find((element:Vegetable) => element.id === id))
		}
	}

    return (
		<div className="container">
			<Header
				title="vegetables"
				toggleShowAddForm={() => setShowAddForm(!showAddForm)}
				showAddForm={showAddForm}
			/>
			{showAddForm ? <AddItem setShowAddForm={setShowAddForm} /> : ''}

			{showEditForm ? <EditItem data={editingItem} setShowEditForm={setShowEditForm} /> : '' }

			<VegetablesList data={visibleData} onDelete={deleteItem} onEdit={onEdit}/>

		</div>
	);
};