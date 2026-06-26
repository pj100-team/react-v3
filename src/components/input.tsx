type InputProps = {
	type: string;
	checked: boolean;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	width: string;
	height: string;
};

const Input: React.FC<InputProps> = ({ type, checked, onChange, width, height }) => {
  return (
    <input
      type={type}
	  checked={checked}
      onChange={onChange}
	  style={{ width: width, height: height }}
    />
  );
};

export default Input;
