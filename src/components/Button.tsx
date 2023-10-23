interface Props {
  buttonName: string;
  backGroundColor: "red" | "green" | "yellow";
  onClick: () => void;
}

const Button = ({ buttonName, backGroundColor, onClick }: Props) => {
  let color;
  switch (backGroundColor) {
    case "red":
      color = "bg-[#f87171]";
      break;
    case "yellow":
      color = "bg-[#fcd34d]";
      break;
    case "green":
      color = "bg-[#86efac]";
      break;
  }
  return (
    <button
      className={`text-[#f9fafb] ${color} py-2 px-4 rounded mx-5`}
      onClick={onClick}
    >
      {buttonName}
    </button>
  );
};

export default Button;
