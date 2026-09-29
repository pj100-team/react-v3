import { useRef, useState } from "react";

export type Todo = {
	id: number;
	text: string;
	createdAt: string;
	isDone: boolean;
};

type UseTodoResult = {
	todos: Todo[];
	isAllChecked: boolean;
	hasCheckedTodo: boolean;
	addTodo: (text: string) => boolean;
	toggleTodo: (id: number) => void;
	toggleAllTodos: (isDone: boolean) => void;
	deleteTodo: (id: number) => void;
	deleteCheckedTodos: () => void;
};

// TODOリストの状態と操作をまとめたフック
const useTodo = (): UseTodoResult => {
	const [todos, setTodos] = useState<Todo[]>([]);
	const nextId = useRef<number>(1);

	// 空文字は追加せず、追加できたかどうかを返す
	const addTodo = (text: string): boolean => {
		const trimmedText = text.trim();
		if (trimmedText === "") return false;

		const newTodo: Todo = {
			id: nextId.current,
			text: trimmedText,
			createdAt: new Date().toLocaleDateString("ja-JP"),
			isDone: false,
		};
		nextId.current += 1;

		setTodos((prevTodos) => [...prevTodos, newTodo]);
		return true;
	};

	const toggleTodo = (id: number) => {
		setTodos((prevTodos) =>
			prevTodos.map((todo) =>
				todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
			)
		);
	};

	const toggleAllTodos = (isDone: boolean) => {
		setTodos((prevTodos) =>
			prevTodos.map((todo) => ({ ...todo, isDone: isDone }))
		);
	};

	const deleteTodo = (id: number) => {
		setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
	};

	const deleteCheckedTodos = () => {
		setTodos((prevTodos) => prevTodos.filter((todo) => !todo.isDone));
	};

	const isAllChecked = todos.length > 0 && todos.every((todo) => todo.isDone);
	const hasCheckedTodo = todos.some((todo) => todo.isDone);

	return {
		todos,
		isAllChecked,
		hasCheckedTodo,
		addTodo,
		toggleTodo,
		toggleAllTodos,
		deleteTodo,
		deleteCheckedTodos,
	};
};

export default useTodo;
