import './App.css';
import Button from './components/Button';

function App() {
  const list = ['test1', 'test2', 'test3', 'test4', 'test5'];

  return (
    <>
      <header className="bg-[#94A3B8] text-center p-[20px] text-4xl text-[#F9FAFB]">React-v3</header>
      <div className="flex space-x-2 mt-2 justify-center items-center">
        {list.map((value) => {
          return <Button text={value} />;
        })}
      </div>
    </>
  );
}

export default App;
