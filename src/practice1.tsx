import Button from "./components/button";

function Practice1() {
	return (
		<>
			<div className="button">
				<Button
					borderColor="#f87171"
					backgroundColor="#f87171"
					onClick={() => console.log("button1")}
					children= "button1"
				/>
				<Button
					borderColor="#fcd34d"
					backgroundColor="#fcd34d"
					onClick={() => console.log("button2")}
					children= "button2"
				/>
				<Button
					borderColor="#86efac"
					backgroundColor="#86efac"
					onClick={() => console.log("button3")}
					children= "button3"
				/>
			</div>
		</>
	);
}

export default Practice1;