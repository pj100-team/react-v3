import { memo, useCallback, useState } from 'react';
import './App.css';

const ShowCount = memo(({ cnt, no }: { cnt: number; no: number }) => {
  console.log(`show count:${no}`);
  return <div>count:{cnt}</div>;
});

const Button = memo(({ onClick }: { onClick: () => void }) => {
  console.log('button');
  return <button onClick={onClick}>+</button>;
});

function App() {
  const [count1, setCount1] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);

  const addCount1 = useCallback(() => {
    setCount1(count1 + 1);
  }, [count1]);

  const addCount2 = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]);

  return (
    <>
      <ShowCount cnt={count1} no={1} />
      <Button onClick={addCount1} />
      <ShowCount cnt={count2} no={2} />
      <Button onClick={addCount2} />
    </>
  );
}

export default App;
