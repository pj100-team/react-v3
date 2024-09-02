import { useCallback, memo, useState } from 'react';

type Props = {
  num: number;
};

const Counter = memo(({ num }: Props) => {
  const [count, setCount] = useState<number>(0);
  console.log(`render Counter:${num}`);

  const addCount = useCallback(() => {
    console.log(`add count ${num}`);
    setCount((count) => count + 1);
  }, [num]);
  return (
    <div className="bg-gray-100">
      <p>Counter:{num}</p>
      <p>count:{count}</p>
      <button onClick={addCount}>add</button>
    </div>
  );
});

export default Counter;
