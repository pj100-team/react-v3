import React from 'react';

interface ButtonProps {
  name: string;
  alertText: string;
}

const Button: React.FC<ButtonProps> = ({ name, alertText }) => {
  const handleClick = () => {
    alert(alertText);
  };

  return (
    <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {name}
    </button>
  );
};

export default Button;
