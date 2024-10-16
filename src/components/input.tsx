interface InputProps {
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input: React.FC<InputProps> = ({ type, onChange, className }) => {
  return <input type={type} onChange={onChange} className={className} />;
};

export default Input;
