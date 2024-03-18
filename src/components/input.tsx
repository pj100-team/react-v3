import React from 'react';

type Props = {
  type: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  isVisibled?: boolean;
  style?: string;
  value?: string;
};

const Input = ({ type, onChange, isVisibled: show, style, value }: Props) => {
  return (
    <div className="flex justify-center py-4">
      <input value={value} type={type} onChange={onChange} className={style} />
      {show ? 'Hello World' : ''}
    </div>
  );
};
export default Input;
