import React from 'react';

interface Props {
  type: React.HTMLInputTypeAttribute;
  className: string;
  value?: string;
  isChecked?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
}

const Input: React.FC<Props> = ({ type, className, value, isChecked, onChange, children }) => {
  return (
    <div>
      <input type={type} className={className} onChange={onChange} value={value} checked={isChecked} />
      {children}
    </div>
  );
};

export default Input;
