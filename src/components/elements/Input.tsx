import React, { ReactNode } from 'react';

interface Props {
  type: React.HTMLInputTypeAttribute;
  className: string;
  isChecked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: ReactNode;
}

const Input: React.FC<Props> = ({ type, className, isChecked, onChange, children }) => {
  return (
    <div className={className}>
      <input type={type} checked={isChecked} onChange={onChange} />
      {children}
    </div>
  );
};

export default Input;
