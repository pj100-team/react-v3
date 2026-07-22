import React from 'react';

interface ButtonProps {
  label: string;
 practice4_shake
  type?: 'submit' | 'reset' | 'button';

  backgroundColor?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

 practice4_shake
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
