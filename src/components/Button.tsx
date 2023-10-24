interface Props {
  buttonName: string;
<<<<<<< HEAD
  backGroundColor: "red" | "green" | "yellow" | "gray";
=======
  backGroundColor: "red" | "green" | "yellow";
>>>>>>> d710fe3d486872031b0d265970db2a7fad844e44
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
<<<<<<< HEAD
    case "gray":
      color = "bg-slate-400";
      break;
=======
>>>>>>> d710fe3d486872031b0d265970db2a7fad844e44
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
