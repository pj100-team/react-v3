import React from 'react';

type InputProps = {
  id: string;
  type: 'checkbox';
  onChange: () => void;
};

const Input: React.FC<InputProps> = ({ id, type, onChange }) => {
  return (
    <>
      <label htmlFor={id}>
        <input id={id} type={type} onChange={onChange} />
      </label>
    </>
  );
};

export default Input;
