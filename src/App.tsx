import './App.css';

// propsでtextを受け取り、表示するヘッダーのコンポーネントを作成（アロー関数を使ってください）(typeも用意してください)
const Header = (props: { text: string }) => (
  <header className="bg-[#94A3B8] text-center p-[20px] text-4xl text-[#F9FAFB]">{props.text}</header>
);

// メインコンテンツを表示するコンポーネントを作成（アロー関数を使ってください）
const MainContent = () => (
  <main className="bg-[#334155] text-center p-[20px] text-4xl text-[#F9FAFB]">
    <p>React-v3</p>
  </main>
);

// フッターを表示するコンポーネントを作成（アロー関数を使ってください）
const Footer = () => (
  <footer className="bg-[#94A3B8] text-center p-[20px] text-4xl text-[#F9FAFB]">
    <p>© 2021 React-v3</p>
  </footer>
);

function App() {
  //　用意した３つのコンポーネントを使ってページを作成してください
  return (
    <div className="App">
      <Header text="React-v3" />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
