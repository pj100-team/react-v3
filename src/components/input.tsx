import React from 'react';

interface InputProps {
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  value: string;
}

const Input: React.FC<InputProps> = ({ type, onChange, className,value }) => {
  return <input value={value}type={type} onChange={onChange} className={className} />;
};

export default Input;
