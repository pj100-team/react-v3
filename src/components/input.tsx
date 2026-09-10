type InputProps = {
	type: string;
	value?: string;
	checked?: boolean;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	width: string;
	height: string;
	borderColor?: string;
};

const Input: React.FC<InputProps> = ({ type, value, checked, onChange, width, height, borderColor }) => {
  return (
    <input
      type={type}
	  value={value}
	  checked={checked}
      onChange={onChange}
	  style={{ width: width, height: height, border: `2px solid ${borderColor ?? "#3b82f6"}` }}
    />
  );
};

export default Input;
