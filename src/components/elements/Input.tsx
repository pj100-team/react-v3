import React from 'react';

interface InputProps {
  type: React.HTMLInputTypeAttribute;
  className: string;
  value?: string;
  isChecked?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
}

const Input = ({ type, className, value, isChecked, onChange, children }: InputProps) => {
  return (
    <div>
      <input type={type} className={className} onChange={onChange} value={value} checked={isChecked} />
      {children}
    </div>
  );
};

export default Input;