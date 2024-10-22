import React from 'react';

interface ButtonProps {
  buttonName: string;
  backGroundColor: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  buttonName,
  backGroundColor,
  onClick,
}) => {
  return (
    <button
      className="px-4 h-8 rounded text-white text-base font-bold hover:bg-red-600 ml-2"
      style={{ backgroundColor: backGroundColor }}
      onClick={onClick}
    >
      {buttonName}
    </button>
  );
};

export default Button;
