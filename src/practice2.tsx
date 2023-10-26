import {useState} from "react";
import Input from "./components/input";


function Practice2() {

	const [isChecked, setIsChecked] = useState(false);
  const checkedConverter = () => {
  	setIsChecked(!isChecked);
	}

	return (
		<>
			<Input
					type="checkbox"
					style={{
						accentColor:"blue",
						//position: "right",
						// width:"70%"
					}}
					checkedConverter = {checkedConverter}
					isChecked ={isChecked}
			/>	
		</>
	);
}

export default Practice2;