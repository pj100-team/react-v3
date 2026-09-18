import Input from "../components/Input";
import Button from "../components/Button";
import { useRef, useState } from "react"

type Todo = {
	id: number;
	text: string;
	createdAt: string;
	isDone: boolean;
};

const border = "1px solid #d1d5db";

const rowStyle: React.CSSProperties = {
	display: "grid",
	gridTemplateColumns: "60px 110px 1fr 96px",
	borderBottom: border,
};

const cellStyle: React.CSSProperties = {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	padding: "8px 12px",
	borderRight: border,
};

const Practice5 = () => {
	const [inputValue, setInputValue] = useState<string>("");
	const [todos, setTodos] = useState<Todo[]>([]);
	const nextId = useRef<number>(1);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	}

	const handleAdd = () => {
		const text = inputValue.trim();
		if (text === "") return;

		const newTodo: Todo = {
			id: nextId.current,
			text: text,
			createdAt: new Date().toLocaleDateString("ja-JP"),
			isDone: false,
		};
		nextId.current += 1;

		setTodos([...todos, newTodo]);
		setInputValue("");
	}

	const handleToggle = (id: number) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
			)
		);
	}

	const handleToggleAll = (e: React.ChangeEvent<HTMLInputElement>) => {
		const isDone = e.target.checked;
		setTodos(todos.map((todo) => ({ ...todo, isDone: isDone })));
	}

	const handleDelete = (id: number) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	}

	const handleBulkDelete = () => {
		setTodos(todos.filter((todo) => !todo.isDone));
	}

	const isAllChecked = todos.length > 0 && todos.every((todo) => todo.isDone);
	const hasCheckedTodo = todos.some((todo) => todo.isDone);

	return (
		<>
			<h1 style={{ textAlign: "center", fontSize: "24px", marginTop: "24px" }}>
				TO DO List
			</h1>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "center",
					gap: "16px",
					marginTop: "24px",
				}}
			>
				<Input
					type="text"
					value={inputValue}
					onChange={handleInputChange}
					width="200px"
					height="40px"
				/>
				<Button
					type="submit"
					label="追加"
					backgroundColor="#3b82f6"
					textColor="#ffffff"
					padding="0.5rem 1.25rem"
					fontSize="0.875rem"
					onClick={handleAdd}
				/>
			</div>
			<div style={{ width: "500px", margin: "24px auto 0" }}>
				{hasCheckedTodo && (
					<div style={{ marginBottom: "8px" }}>
						<Button
							label="一括削除"
							backgroundColor="#ef4444"
							textColor="#ffffff"
							padding="0.25rem 0.75rem"
							fontSize="0.75rem"
							onClick={handleBulkDelete}
						/>
					</div>
				)}
				{todos.length > 0 && (
					<div
						style={{
							borderTop: border,
							borderLeft: border,
						}}
					>
						<div
							style={{
								...rowStyle,
								fontSize: "0.875rem",
								fontWeight: "bold",
								color: "#374151",
								backgroundColor: "#f3f4f6",
							}}
						>
							<div style={cellStyle}>
								<Input
									type="checkbox"
									isChecked={isAllChecked}
									onChange={handleToggleAll}
									width="20px"
									height="20px"
								/>
							</div>
							<span style={cellStyle}>登録日</span>
							<span style={cellStyle}>TODO</span>
							<span style={cellStyle}>削除</span>
						</div>
						<ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
							{todos.map((todo) => (
								<li key={todo.id} style={rowStyle}>
									<div style={cellStyle}>
										<Input
											type="checkbox"
											isChecked={todo.isDone}
											onChange={() => handleToggle(todo.id)}
											width="20px"
											height="20px"
										/>
									</div>
									<span
										style={{
											...cellStyle,
											fontSize: "0.875rem",
											color: "#6b7280",
										}}
									>
										{todo.createdAt}
									</span>
									<span
										style={{
											...cellStyle,
											textDecoration: todo.isDone ? "line-through" : "none",
											color: todo.isDone ? "#9ca3af" : "inherit",
										}}
									>
										{todo.text}
									</span>
									<div style={cellStyle}>
										<Button
											label="削除"
											backgroundColor="#ef4444"
											textColor="#ffffff"
											padding="0.25rem 0.75rem"
											fontSize="0.75rem"
											onClick={() => handleDelete(todo.id)}
										/>
									</div>
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</>
	);
};

export default Practice5;
