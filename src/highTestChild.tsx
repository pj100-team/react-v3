import React, { useState } from 'react';

interface ChildComponentProps {
  onClick: () => void;
}

const HightTestChild: React.FC<ChildComponentProps> = ({ onClick }) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) => prevCount - 1);
  };

  console.log('子コンポーネントがレンダリングされました');

  return (
    <>
      <button onClick={onClick}>Count++</button>
      <p>子Count: {count}</p>
      <button onClick={handleClick}>Count--</button>
    </>
  );
};

export default React.memo(HightTestChild);
