// components/button.tsx

import React from 'react';

interface ButtonProps {
  name: string;
  className: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ name, className, onClick}) => {
  return <button className={className} onClick={onClick}>{name}</button>;
};

export default Button;
