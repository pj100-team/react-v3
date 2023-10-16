interface Props {
  buttonName: string;
  borderColor: string;
  backGroundColor: string;
  color: string;
  onClick: () => void;
}

const Button = ({
  buttonName,
  borderColor,
  backGroundColor,
  color,
  onClick,
}: Props) => {
  return (
    <button
      className={`${color} ${backGroundColor} py-2 px-4 rounded mx-5 my-10`}
      onClick={onClick}
    >
      {buttonName}
    </button>
  );
};

export default Button;
