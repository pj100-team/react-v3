import { useState } from 'react';

type Props = {
  num: number;
};

const Counter = ({ num }: Props) => {
  const [count, setCount] = useState<number>(0);
  console.log(`render Counter:${num}`);
  return (
    <div className="bg-gray-100">
      <p>Counter:{num}</p>
      <p>count:{count}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
    </div>
  );
};

export default Counter;
