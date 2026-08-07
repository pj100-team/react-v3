import React from 'react';

interface ButtonProps {
  label: string;
  backgroundColor?: string;
  textColor?: string;
  textSize?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  backgroundColor = 'bg-[#f87171]',
  textColor = 'text-[#f9fafb]',
  textSize = '',
  type = 'button',
  label,
  onClick = () => {},
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`px-4 py-1 rounded-xl ${backgroundColor} ${textColor} ${textSize}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;