import React from 'react';

interface ButtonProps {
  label: string;
  type?: React.HTMLInputTypeAttribute;
  backgroundColor?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ backgroundColor, label, onClick }) => {
  return (
    <button className={`px-4 py-1 text-[#f9fafb] rounded-xl ${backgroundColor}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
