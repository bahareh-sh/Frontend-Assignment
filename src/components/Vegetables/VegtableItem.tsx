import { Vegetable } from "types/Vegetable" 
import { FaEdit, FaTimes } from 'react-icons/fa'
interface VegtableItemProps  {
	data:Vegetable;
	onDelete: any;
	onEdit: any
}

function VegtableItem({data, onDelete, onEdit} : VegtableItemProps) {
  return (
		<div className="item">
			<h3>
				{data.name} 
				<div>
					<FaTimes 
						style={{color: 'red', cursor: 'pointer'}} 
						onClick={() => onDelete(data.id)}
					/> 
					<FaEdit 
						style={{color: 'blue', cursor: 'pointer'}} 
						onClick={() => onEdit(data.id)}
					/> 
				</div>
			</h3>
			<p>{data.description}</p>
		</div>
  )
}

export default VegtableItem