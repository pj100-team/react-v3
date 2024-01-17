import './App.css';
import Practice4 from './templates/practice4';

function App() {
  return (
    <>
      <header className="bg-[#94A3B8] text-center p-[20px] text-4xl text-[#F9FAFB]">React-v3</header>
      <main className="mt-[100px]">
        {/* <section className="flex flex-col gap-40"> */}
        <section className="max-w-[600px] mx-auto">
          <Practice4 />
        </section>
      </main>
    </>
  );
}

export default App;
