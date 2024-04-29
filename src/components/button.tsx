// components/button.tsx

import React from 'react';

interface ButtonProps {
  name: string;
  className: string;
}

const Button: React.FC<ButtonProps> = ({ name, className }) => {
  return <button className={className}>{name}</button>;
};

export default Button;
