import { FormEvent, useState } from "react";
import todoItem from '../components/todoItem'

export type PropsTodo = {
	id:number,
	createdDate: Date,
	task:string
}

const Practice5 = () => {
	const [todos, setTodos] = useState<PropsTodo[]>([])
	const [inputValue, setInputValue] = useState<string>('')

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value)
	}
	const addTodoItem = () => {
		setTodos(state => {
			const getMaxIdNum = () => {
				if(state.length === 0){
					return 0
				}
				return Math.max.apply(null,state.map(obj => obj.id)) + 1
			}
			return [...state,{id: getMaxIdNum(),task:inputValue,createdDate:new Date()}]
		})
		setInputValue('')
	}

	const deleteTodoItem = (e: FormEvent<HTMLInputElement>) => {
		const deleteId = e.currentTarget.id
		setTodos(todos => {
			const newTodos = todos.filter((todo) => {
				if(todo.id.toString() !== deleteId){
					return {...todo}
				}
			})
			return newTodos
		})
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
