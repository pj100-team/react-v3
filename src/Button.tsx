import { memo } from 'react';

type Props = {
  onClick: () => void;
};

// memo
const Button = memo(({ onClick }: Props) => {
  console.log('render button');
  return <button onClick={onClick}>Button</button>;
});

export default Button;
