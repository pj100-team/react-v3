import React from "react";

interface Props {
  borderColor: string;
  backgroundColor: string;
  children?: React.ReactNode;
  onClick: ()=> void;
}


const Button: React.FC<Props> = ({
    borderColor,
    backgroundColor,
    children,
    onClick,
  }) => {
  return (
      <button
        onClick={onClick}
        style={{
            borderColor,
            backgroundColor,
            color:"#f9fafb",
            
            margin: "20px",
            borderRadius: "10%",
            width: "90px",
            height: "30px"
        }}
      >
      {children}
      </button>
  );
}

export default Button