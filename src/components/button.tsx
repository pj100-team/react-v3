import React from 'react';

type ButtonProps = {
  name: string;
  color: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<ButtonProps> = ({ name, color, onClick }) => {
  return (
    <button name={name} className={`rounded-md w-28 h-10 text-[#f9fafb] border-${color} bg-${color}`} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
