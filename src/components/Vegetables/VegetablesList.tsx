import { Vegetable } from "types/Vegetable"
import VegtableItem from "./VegtableItem"
interface VegetablesListProps{
	data?: Vegetable[],
	onDelete:any
	onEdit: any
}

function VegetablesList({data, onDelete, onEdit}: VegetablesListProps) {
  return (
	<>
		{data?.map((vegetable:Vegetable) => (
			<VegtableItem 
				key={vegetable.id}  
				data={vegetable} 
				onDelete={onDelete}
				onEdit={onEdit}
			/>
		))}
	</>
  )
}

export default VegetablesList