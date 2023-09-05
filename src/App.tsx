import "./App.css";
import { Button } from "./components/button";

function App() {
	const button1Fn = () => {
		console.log("button1");
	};

	const button2Fn = () => {
		console.log("button2");
	};

	const button3Fn = () => {
		console.log("button3");
	};

	return (
		<div className="flex justify-center gap-10 pt-1">
			<Button
				buttonName={"button1"}
				buttonStyle={
					"border border-[#f87171] bg-[#f87171] w-[100px] text-[#f9fafb] rounded"
				}
				onClick={button1Fn}
			/>
			<Button
				buttonName={"button2"}
				buttonStyle={
					"border border-[#fcd34d] bg-[#fcd34d] w-[100px] text-[#f9fafb] rounded"
				}
				onClick={button2Fn}
			/>
			<Button
				buttonName={"button3"}
				buttonStyle={
					"border border-[#86efac] bg-[#86efac] w-[100px] text-[#f9fafb] rounded"
				}
				onClick={button3Fn}
			/>
		</div>
	);
}

export default App;
