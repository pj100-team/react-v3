import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react"

const Practice3 = () => {
	const [inputValue, setInputValue] = useState<string>("");

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
		console.log(e.target.value);
	}

	const handleReset = () => {
		setInputValue("");
		console.clear();
	}

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
				onChange={handleInputChange}
				width="200px"
				height="40px"
			/>
			<Button
				label="リセット"
				backgroundColor="#3b82f6"
				textColor="#ffffff"
				onClick={handleReset}
			/>
		</div>
	);
};

export default Practice3;
