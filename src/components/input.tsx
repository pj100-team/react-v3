type InputProps = {
	type: string;
	isChecked: boolean;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	width: string;
	height: string;
};

const Input: React.FC<InputProps> = ({ type, isChecked, onChange, width, height }) => {
  return (
    <input
      type={type}
	  checked={isChecked}
      onChange={onChange}
	  style={{ width: width, height: height }}
    />
  );
};

export default Input;
