import React, { useState } from "react";
import { Input } from "../elements/Input";

export const Practice2 = () => {
	const [isChecked, setIsChecked] = useState<boolean>(true);

	const handCheckChange = () => {
		setIsChecked(!isChecked);
	};

	return (
		<>
			<Input
				type={"checkbox"}
				handCheckChange={handCheckChange}
				isChecked={isChecked}
			/>
			{isChecked && "Hello World"}
		</>
	);
};
