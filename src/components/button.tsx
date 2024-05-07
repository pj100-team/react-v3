import React from 'react';

type ButtonColor = {
  name: string;
  className: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<ButtonColor> = ({ name, className, onClick }) => {
  return (
    <button name={name} className={className} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
