import './App.css';

// クリックすると、受け取った文字のアラートを表示するボタンを作成
const Button = (props: { text: string }) => {
  // add tailwind classname this button
  const className = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded';
  return (
    <button className={className} onClick={() => alert(props.text)}>
      {props.text}
    </button>
  );
};

function App() {
  // tailwindを使用して、このボタンを中央寄せしたうえでいい感じに配置する
  // 間隔を開ける
  const center = 'h-screen flex justify-center items-center gap-4';
  return (
    <div className={center}>
      <Button text="Hello" />
      <Button text="Next.js" />
      <Button text="TypeScript" />
    </div>
  );
}

export default App;
