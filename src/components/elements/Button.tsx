// type Props = { label: string; onClick: () => void };

import React from 'react';

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  const handleClick = () => {
    console.log(label);
  };
  return (
    <>
      <button onClick={handleClick}>{label}</button>
    </>
  );
};

export default Button;
