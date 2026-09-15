type InputProps = {
	type: string;
	value?: string;
	isChecked?: boolean;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	width: string;
	height: string;
};

const Input: React.FC<InputProps> = ({ type, value = "", isChecked = false, onChange, width, height }) => {
  return (
    <input
      type={type}
	  value={value}
	  checked={isChecked}
      onChange={onChange}
	  style={{ width: width, height: height, border: "2px solid #3b82f6" }}
    />
  );
};

export default Input;
