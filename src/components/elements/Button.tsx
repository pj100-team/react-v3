import React from 'react';

interface ButtonProps {
  label: string;
  type?: 'submit' | 'reset' | 'button';
  backgroundColor?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ backgroundColor, label, type = 'button', onClick }) => {
  return (
    <button
      type={type}
      className={`px-4 py-1 text-[#f9fafb] rounded-xl ${backgroundColor}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;