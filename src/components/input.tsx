type InputProps = {
	type: string;
	value?: string;
	isChecked?: boolean;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	width: string;
	height: string;
	borderColor?: string;
};

const Input: React.FC<InputProps> = ({ type, value, isChecked, onChange, width, height, borderColor }) => {
  return (
    <input
      type={type}
	  value={value}
	  checked={isChecked}
      onChange={onChange}
	  style={{ width: width, height: height, border: `2px solid ${borderColor ?? "#3b82f6"}` }}
    />
  );
};

export default Input;
