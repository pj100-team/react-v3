import { useCallback, useState } from 'react';
import './App.css';
import CountText from './CountText';
import Button from './Button';

function App() {
  const [count, setCount] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);

  // Callback
  const callback = useCallback(() => {
    console.log('callback');
  }, []);

  return (
    <>
      <div className="bg-gray-100">
        <p>Counter:App</p>
        <CountText num={count} />
        <button onClick={() => setCount((count) => count + 1)}>add</button>
        <p>count:{count2}</p>
        <button onClick={() => setCount2((count2) => count2 + 1)}>add</button>
        <Button onClick={callback} />
      </div>
    </>
  );
}

export default App;
