import { memo, useCallback, useState } from 'react';
import './App.css';

const ShowCount = memo(({ cnt, no }: { cnt: number; no: number }) => {
  // カウント表示のtailwindデザイン
  const tailwind = `text-3xl font-bold underline bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2`;
  console.log(`show count:${no}`);
  return <div className={tailwind}>count:{cnt}</div>;
});

const Button = memo(({ onClick }: { onClick: () => void }) => {
  // カウントボタンのtailwindデザイン
  const tailwind = `text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2`;
  console.log('button');
  return (
    <button className={tailwind} onClick={onClick}>
      +
    </button>
  );
});

function App() {
  const [count1, setCount1] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);

  const addCount1 = useCallback(() => {
    setCount1(count1 + 1);
  }, [count1]);

  const addCount2 = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]);

  // カウントとボタンの配置に関するtailwind
  const tailwind = `flex justify-center items-center h-screen`;

  return (
    <div className={tailwind}>
      <ShowCount cnt={count1} no={1} />
      <Button onClick={addCount1} />
      <ShowCount cnt={count2} no={2} />
      <Button onClick={addCount2} />
    </div>
  );
}

export default App;
