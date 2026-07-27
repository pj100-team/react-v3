import React from 'react';

interface ButtonProps {
  label: string;
  type?: React.HTMLInputTypeAttribute;
  backgroundColor?: string;
  textColor?: string;
  textSize?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ backgroundColor, textColor, textSize, label, onClick }) => {
  return (
    <button className={`px-4 py-1 rounded-lg font-thin ${backgroundColor} ${textColor} ${textSize}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;