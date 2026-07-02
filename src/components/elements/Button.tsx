import React from 'react';

type ButtonProps = {
  label: string;
  className: string;
};


const Button = ({ label, className }: ButtonProps) => {

  const handleClick = () => {
    console.log(label);
  };

  return (
    <button
      className={`${className} px-4 py-1 mr-2 text-[#f9fafb]`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default Button;
