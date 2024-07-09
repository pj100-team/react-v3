import React from 'react';

type InputProps = {
  id: string;
  type: 'text';
  style?: React.CSSProperties;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  value: string;
  children?: React.ReactNode;
};

const Input: React.FC<InputProps> = ({ id, type, style, onChange, onBlur, value, children }) => {
  return (
    <>
      <label htmlFor={id}>
        {children}
        <input id={id} type={type} style={style} onChange={onChange} onBlur={onBlur} value={value} />
      </label>
    </>
  );
};

export default Input;
