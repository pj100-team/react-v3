import { useState } from "react";
import { Input } from "../elements/Input";
import { Button } from "../elements/Button";

export const Practice3 = () => {
	const [value, setValue] = useState<string>("");
	return (
		<>
			<Input
				type={"type"}
				style={"border border-slate-800"}
				handCheckChange={(e) => {
					setValue(e.target.value);
				}}
				value={value}
			/>
			<Button buttonName={"リセット"} onClick={() => setValue("")} />
		</>
	);
};
