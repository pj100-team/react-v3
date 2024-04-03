interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>)=> void;
}

const Button3: React.FC<Props> = ({
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
        送信
      </button>
  );
}

export default Button3