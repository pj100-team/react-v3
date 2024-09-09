import { useState } from 'react';
import './App.css';

const ShowCount = ({ cnt, no }: { cnt: number; no: number }) => {
  console.log(`show count:${no}`);
  return <div>count:{cnt}</div>;
};

function App() {
  const [count1, setCount1] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);

  const addCount1 = () => {
    setCount1(count1 + 1);
  };

  const addCount2 = () => {
    setCount2(count2 + 1);
  };

  return (
    <>
      <ShowCount cnt={count1} no={1} />
      <button onClick={addCount1}>+</button>
      <ShowCount cnt={count2} no={2} />
      <button onClick={addCount2}>+</button>
    </>
  );
}

export default App;
