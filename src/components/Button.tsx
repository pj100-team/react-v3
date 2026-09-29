type ButtonProps = {
  label: string;
  backgroundColor: string;
  textColor: string;
  type?: "button" | "submit" | "reset";
  padding?: string;
  fontSize?: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  label,
  backgroundColor,
  textColor,
  type = "button",
  padding = "0.75rem 3.5rem",
  fontSize = "1.125rem",
  onClick,
}) => {
  return (
    <button
      type={type}
      style={{
        borderColor: backgroundColor,
        backgroundColor,
        color: textColor,
        borderRadius: "0.375rem",
        padding,
        fontSize,
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
