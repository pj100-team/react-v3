import React, { useState, useCallback, memo } from 'react';
import './App.css';

const Button = memo(({ onClick }: { onClick: () => void }) => {
  console.log('Button rendered');
  return <button onClick={onClick}>Click me</button>;
});

const CountDisplay = memo(({ count }: { count: number }) => {
  console.log('CountDisplay rendered');
  return <p>Count: {count}</p>;
});

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  console.log('App rendered');

  return (
    <>
      <Button onClick={handleClick} />
      <CountDisplay count={count} />
    </>
  );
}

export default App;
