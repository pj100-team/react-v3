import React from 'react';

type InputProps = {
  type: string;
  style?: React.CSSProperties;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({ type, style, onChange }) => {
  return <input type={type} style={style} onChange={onChange} />;
};

export default Input;
