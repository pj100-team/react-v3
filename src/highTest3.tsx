import React, { useState, useCallback } from 'react';
import HighTestChild from './highTestChild';

const HighTest3: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  console.log('親コンポーネントがレンダリングされました');

  return (
    <div>
      <p>親Count: {count}</p>
      <HighTestChild onClick={handleClick} />
    </div>
  );
};

export default HighTest3;
