import { useState } from 'react';
import './App.css';
import Counter from './Counter';

function App() {
  const [count, setCount] = useState<number>(0);
  console.log(`render Counter:App`);
  return (
    <>
      <div className="bg-gray-100">
        <p>Counter:App</p>
        <p>count:{count}</p>
        <button onClick={() => setCount(count + 1)}>add</button>
      </div>
      <Counter num={0} />
      <Counter num={1} />
    </>
  );
}

export default App;
