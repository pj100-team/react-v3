import { useState, useCallback, memo } from 'react';
import './App.css';

const Button = memo(({ onClick }: { onClick: () => void }) => {
  console.log('Button rendered');
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onClick}>
      Click me
    </button>
  );
});

const CountDisplay = memo(({ count }: { count: number }) => {
  console.log('CountDisplay rendered');
  return <p className="text-2xl font-bold">Count: {count}</p>;
});

function App() {
  const [count, setCount] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);

  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const handleClick2 = useCallback(() => {
    setCount2((prevCount) => prevCount + 1);
  }, []);

  console.log('App rendered');

  return (
    <>
      <Button onClick={handleClick} />
      <CountDisplay count={count} />
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick2}>
        Increment count 2
      </button>
      <p className="text-2xl font-bold">Count 2: {count2}</p>
    </>
  );
}

export default App;
