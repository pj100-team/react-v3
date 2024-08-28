type Props = {
  text: string;
  color: 'one' | 'two' | 'three';
};

const Button = ({ text, color }: Props) => {
  const colorStyle = () => {
    switch (color) {
      case 'one':
        return 'bg-button-one border-button-one';
      case 'two':
        return 'bg-button-two border-button-two';
      case 'three':
        return 'bg-button-three border-button-three';
      default:
        return '';
    }
  };
  return (
    <button className={`${colorStyle()} text-[#f9fafb] rounded-lg px-8 py-2`} onClick={() => console.log(text)}>
      {text}
    </button>
  );
};

export default Button;
