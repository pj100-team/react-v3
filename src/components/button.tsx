import React from 'react';

type ButtonProps = {
  className: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ className, onClick }) => {
  return <button className={className} onClick={onClick}></button>;
};

export default Button;
