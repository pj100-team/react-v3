import React from 'react';

interface ButtonProps {
  label: string;
  backgroundColor: string;
  textColor: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, backgroundColor, textColor, className = "" }) => {
  const handleClick = () => {
    console.log(label);
  };

  return (
    <button
      className={`p-2 rounded border-2 ${className}`}
      style={{ backgroundColor, color: textColor, borderColor: backgroundColor }}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default Button;
