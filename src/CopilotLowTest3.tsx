import React from 'react';

const CopilotLowTest3 = () => {
  // ボタンがクリックされたときに実行される関数
  const handleClick = () => {
    alert('Button was clicked!');
  };

  return (
    <div>
      <p>Test3</p>
      <button onClick={handleClick}>クリック</button>
    </div>
  );
};

export default CopilotLowTest3;
