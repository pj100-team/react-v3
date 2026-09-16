type ButtonProps = {
  label: string;
  backgroundColor: string;
  textColor: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, backgroundColor, textColor, type = "button", onClick }) => {
  return (
    <button
      type={type}
      style={{
        borderColor: backgroundColor,
        backgroundColor,
        color: textColor,
        borderRadius: "0.375rem",
        padding: "0.75rem 3.5rem",
        fontSize: "1.125rem",
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
