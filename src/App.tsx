import { useCallback, useState } from 'react';
import './App.css';
import Button from './Button';

function App() {
  const [count, setCount] = useState<number>(0);

  // Callback
  const callback = useCallback(() => {
    console.log('callback');
  }, []);

  return (
    <>
      <div className="bg-gray-100">
        <p>Counter:App</p>
        <p>count:{count}</p>
        <button onClick={() => setCount((count) => count + 1)}>add</button>
        <Button onClick={callback} />
      </div>
    </>
  );
}

export default App;
