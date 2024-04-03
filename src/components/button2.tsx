import React from "react";

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>)=> void;
}


const Button2: React.FC<Props> = ({
    onClick,
  }) => {
  return (
      <button
        onClick={onClick}
        style={{
          color:"grey",
          backgroundColor:"whitesmoke",
          display: "inline-block"
        }}
      >
        リセット
      </button>
  );
}

export default Button2