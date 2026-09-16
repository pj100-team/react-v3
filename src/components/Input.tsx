import { forwardRef } from "react";

type InputProps = {
	type: string;
	id?: string;
	name?: string;
	value?: string;
	isChecked?: boolean;
	placeholder?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
	width: string;
	height: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{ type, id, name, value = "", isChecked = false, placeholder, onChange, onBlur, width, height },
		ref
	) => {
		return (
			<input
				type={type}
				id={id}
				name={name}
				value={value}
				checked={isChecked}
				placeholder={placeholder}
				onChange={onChange}
				onBlur={onBlur}
				ref={ref}
				style={{ width: width, height: height, border: "2px solid #3b82f6" }}
			/>
		);
	}
);

export default Input;
