import React from 'react';

type InputProps = {
  id: string;
  type: 'text' | 'checkbox';
  style?: React.CSSProperties;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({ id, type, style, onChange }) => {
  return <input id={id} type={type} style={style} onChange={onChange} />;
};

export default Input;
