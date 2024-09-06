// 配列データを使って、リストを動的に作成するコンポーネントを作成してください(Propsも用意）

type Props = {
  data: string[];
};

const List = ({ data }: Props) => {
  return (
    <ul>
      {data.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
};

function App() {
  const data = ['item1', 'item2', 'item3'];

  return (
    <div className="App">
      <List data={data} />
    </div>
  );
}

export default App;
