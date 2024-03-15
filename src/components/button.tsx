import React from 'react';

type Props = {
  value: string;
  style: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ value, style, onClick }: Props) => {
  return (
    <div>
      <button value={value} className={style} onClick={onClick}>
        {value}
      </button>
    </div>
  );
};
export default Button;
