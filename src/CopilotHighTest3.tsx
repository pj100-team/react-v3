import React, { useState, useCallback } from 'react';

// 子コンポーネント
const ChildComponent: React.FC<{ onClick: () => void }> = React.memo(({ onClick }) => {
  console.log('ChildComponent レンダリング');
  return <button onClick={onClick}>クリック</button>;
});

const CopilotHighTest3: React.FC = () => {
  const [count, setCount] = useState(0);

  // useCallback を使用して関数をメモ化
  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <h1>カウント: {count}</h1>
      <ChildComponent onClick={handleClick} />
    </div>
  );
};

export default CopilotHighTest3;