import React from 'react';

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const Button: React.FC<ButtonProps> = ({ onClick, children, style }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: '#94A3B8',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: '5px 25px',
        fontSize: '16px',
        cursor: 'pointer',
        ...style,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
