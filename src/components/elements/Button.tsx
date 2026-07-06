import React from 'react';

interface ButtonProps {
  label: string;
  backgroundColor: string;
  onClick: () => void;
}

const Button = ({ backgroundColor, label, onClick }: ButtonProps) => {
  return (
    <button className={`px-4 py-1 text-[#f9fafb] rounded-xl ${backgroundColor}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;