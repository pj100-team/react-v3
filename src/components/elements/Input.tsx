import React from 'react';

interface Props {
  type: React.HTMLInputTypeAttribute;
  className: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = ({ type, className, value, onChange }) => {
  return <input type={type} className={className} onChange={onChange} value={value} />;
};

export default Input;
