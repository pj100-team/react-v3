import './App.css';

function App() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    console.log(`email: ${form.get('email')}`);
    console.log(`password: ${form.get('pass')}`);
    console.log('form submitted');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="email" type="text" placeholder="Enter your name" />
        <input name="pass" type="password" placeholder="Enter your password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
