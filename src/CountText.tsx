import { memo } from 'react';

type Props = {
  num: number;
};

// メモ化
const CountText = memo(({ num }: Props) => {
  console.log('Render Counter Text');
  return <p>count:{num}</p>;
});

export default CountText;
