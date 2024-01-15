import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  style: string;
  type?: 'submit' | 'button';
  onClick?: (e: React.FormEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<Props> = ({ children, style, type = 'button', onClick }) => {
  return (
    <button type={type} onClick={onClick} className={`practice1_btn ${style}`}>
      {children}
    </button>
  );
};

export default Button;
