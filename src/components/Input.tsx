import React from 'react';

type InputProps = {
  id: string;
  type: 'checkbox';
  style?: React.CSSProperties;
  onChange: () => void;
  checked: boolean;
  children?: React.ReactNode;
};

const Input: React.FC<InputProps> = ({ id, type, style, onChange, checked, children }) => {
  return (
    <>
      <label htmlFor={id}>
        <input id={id} type={type} style={style} onChange={onChange} checked={checked} />
        {children}
      </label>
    </>
  );
};

export default Input;
