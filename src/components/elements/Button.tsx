import React from 'react';

interface ButtonProps {
  label: string;
  backgroundColor: string;
}

const Button = ({ backgroundColor, label }: ButtonProps) => {
  const handleClick = () => {
    console.log(label);
  };
  return (
    <button className={`px-4 py-1 text-[#f9fafb] rounded-xl ${backgroundColor}`} onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;