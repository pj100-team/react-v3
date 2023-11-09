interface Props {
	type: string;
	isChecked?: boolean;
	value?: string;
	style?: string;
	handCheckChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
	value,
	type,
	style,
	isChecked,
	handCheckChange,
}: Props) => {
	return (
		<input
			className={style}
			type={type}
			checked={isChecked}
			onChange={handCheckChange}
			value={value}
		/>
	);
};
