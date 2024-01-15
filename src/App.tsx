import './App.css';
import Practice1 from './components/practice1';
import Practice2 from './components/practice2';
import Practice3 from './templates/practice3';
import Practice4 from './templates/practice4';

function App() {
  return (
    <>
      <header className="bg-[#94A3B8] text-center p-[20px] text-4xl text-[#F9FAFB]">React-v3</header>
      <main className="mt-[100px]">
        <section className="flex flex-col gap-40">
          <Practice1 />
          <Practice2 />
          <Practice3 />
          <Practice4 />
        </section>
      </main>
    </>
  );
}

export default App;
