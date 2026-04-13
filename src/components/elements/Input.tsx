import React from 'react';

// type Props = { type: string; className: string; isChecked: boolean; onChange: () => void };
interface Props {
  type: string;
  className: string;
  isChecked: boolean;
  onChange: () => void;
}

const Input: React.FC<Props> = ({ type, className, isChecked, onChange }) => {
  return (
    <div className={className}>
      <input type={type} onChange={onChange} />
      <p className={`ml-3 ${isChecked ? 'visible' : 'invisible'}`}>hello world</p>
    </div>
  );
};

export default Input;
