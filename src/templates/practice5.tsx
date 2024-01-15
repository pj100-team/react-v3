import { useState } from 'react'
import todoItem from '../components/todoItem'


export type PropsTodo = {
	id:number,
	createdDate: Date,
	task:String
}

const Practice5 = () => {

	const sample : PropsTodo[] = [
		// {
		// 	id:0,
		// 	createdDate:new Date('2023-01-01'),
		// 	task:'sample1'
		// },
		// {
		// 	id:1,
		// 	createdDate:new Date('2023-01-03'),
		// 	task:'sample2'
		// },
	]
	const [todos, setTodos] = useState<PropsTodo[]>(sample)
	const [input, setInput] = useState<String>('')

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value)
	}
	const addTodoItem = () => {
		setTodos(state => [...state,{id: state.length,task:input,createdDate:new Date()}])
		setInput('')
	}

	const deleteTodoItem = () => {
		console.log('削除')
	}

	return (
		<>
			<h4 className="font-bold text-center text-sm">TODOlist</h4>
			<div>
				<input type="text" name="addItem" id="addItem" className="p-form__input" onChange={handleChange}/>
				<button type="button" onClick={addTodoItem}>追加</button>
			</div>
			<table>
				<thead>
					<tr>
						<th><input type="checkbox" name="select_all" id="select_all" /></th>
						<th>登録日</th>
						<th>TODO</th>
						<th>削除</th>
					</tr>
				</thead>
				<tbody>
					{
						// todos.length > 0 && 
						todos.map(todo => {
							// return <todoItem key={todo.id} item={todo} />
							return (
								<tr key={todo.id}>
									<td><input type="checkbox" name="selectFlg" id={todo.id.toString()} /></td>
									<td>{todo.createdDate.toLocaleDateString()}</td>
									<td>{todo.task}</td>
									<td><input type="button" name="deleteFlg" id={todo.id.toString()} value="削除" onClick={deleteTodoItem} /></td>
								</tr>
							)
						})
						
					}
				</tbody>
			</table>

		</>
		
	)
}

export default Practice5
