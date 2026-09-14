import Input from "../components/input";
import Button from "../components/button";
import { useState } from "react"

const Practice3 = () => {
	const [inputValue, setInputValue] = useState<string>("");

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: "16px",
				marginTop: "24px",
			}}
		>
			<Input
				type="text"
				value={inputValue}
				onChange={(e) => {
					setInputValue(e.target.value);
					console.log(e.target.value);
				}}
				width="200px"
				height="40px"
				borderColor="#e5e7eb"
			/>
			<Button
				label="リセット"
				backgroundColor="#3b82f6"
				textColor="#ffffff"
				onClick={() => {
					setInputValue("");
					console.clear();
				}}
			/>
		</div>
	);
};

export default Practice3;
