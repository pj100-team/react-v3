type Props = {
  text: string;
};
const Button = ({ text }: Props) => {
  return <button className="p-6 bg-gray-400">{text}</button>;
};

export default Button;
