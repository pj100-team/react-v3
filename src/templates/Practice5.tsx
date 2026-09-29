import Input from "../components/Input";
import Button from "../components/Button";
import { ChangeEvent, CSSProperties, FormEvent, useState } from "react"
import useTodo from "../hooks/useTodo";

const border = "1px solid #d1d5db";

const rowStyle: CSSProperties = {
	display: "grid",
	gridTemplateColumns: "60px 110px 1fr 96px",
	borderBottom: border,
};

const cellStyle: CSSProperties = {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	padding: "8px 12px",
	borderRight: border,
};

const Practice5 = () => {
	const [inputValue, setInputValue] = useState<string>("");
	const {
		todos,
		isAllChecked,
		hasCheckedTodo,
		addTodo,
		toggleTodo,
		toggleAllTodos,
		deleteTodo,
		deleteCheckedTodos,
	} = useTodo();

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// 追加できたときだけ入力欄をクリアする
		if (addTodo(inputValue)) {
			setInputValue("");
		}
	}

	const handleToggleAll = (e: ChangeEvent<HTMLInputElement>) => {
		toggleAllTodos(e.target.checked);
	}

	return (
		<>
			<h1 style={{ textAlign: "center", fontSize: "24px", marginTop: "24px" }}>
				TO DO List
			</h1>
			<form
				onSubmit={handleSubmit}
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
				/>
			</form>
			<div style={{ width: "500px", margin: "24px auto 0" }}>
				{hasCheckedTodo && (
					<div style={{ marginBottom: "8px" }}>
						<Button
							label="一括削除"
							backgroundColor="#ef4444"
							textColor="#ffffff"
							padding="0.25rem 0.75rem"
							fontSize="0.75rem"
							onClick={deleteCheckedTodos}
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
											onChange={() => toggleTodo(todo.id)}
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
											onClick={() => deleteTodo(todo.id)}
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
