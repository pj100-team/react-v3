/* /components/Button.tsx  */
type ButtonType = 'button' | 'submit' | 'reset';
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: ButtonType;
  title: string;
}

const Button = ({
  children,
  className = '',
  type = 'reset',
  onClick,
  title,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`text-gray-50 px-16 py-2 rounded-lg font-medium border-2 border-transparent ${className}`}
      type={type}
      title={title}
    >
      {children}
    </button>
  );
};
export default Button;
