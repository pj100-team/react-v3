import React from 'react';

interface ButtonProps {
  label: string;
  className: string;
}

const Button: React.FC<ButtonProps> = ({ className, label }) => {
  const handleClick = () => {
    console.log(label);
  };
  return (
    <button className={`${className} px-4 py-1 mr-2 text-[#f9fafb]`} onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;
