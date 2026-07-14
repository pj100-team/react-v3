import React from 'react';

interface InputProps {
  type: React.HTMLInputTypeAttribute;
  className: string;
  isChecked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children: React.ReactNode;
}

const Input = ({ type, className, isChecked, onChange, children }: InputProps) => {
  return (
    <div className={className}>
      <input type={type} checked={isChecked} onChange={onChange} />
      {children}
    </div>
  );
};

export default Input;