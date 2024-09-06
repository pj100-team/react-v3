import { useState } from 'react';
import './App.css';

function App() {
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    //formの入力値が空のバリデーションエラーを作成
    if (!form.get('email')) {
      console.log('email is required');
      setError('email is required');
      return;
    }

    if (!form.get('pass')) {
      console.log('password is required');
      setError('password is required');
      return;
    }

    setError('');
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
      <p className="text-red-400">{error}</p>
    </div>
  );
}

export default App;
