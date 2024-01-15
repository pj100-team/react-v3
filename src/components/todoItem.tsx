import type { PropsTodo } from "../templates/practice5"


const todoItem : React.FC<PropsTodo> = (item) => {
	return (
		<tr>
			<td><input type="checkbox" name="selectFlg" id={item.id.toString()} /></td>
			<td>{item.createdDate.toLocaleDateString()}</td>
			<td>{item.task}</td>
			<td><input type="button" name="deleteFlg" id={item.id.toString()} /></td>
		</tr>
	)
}

export default todoItem
