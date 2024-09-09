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

  // create tailwind classname for this input
  const inputClass = 'border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500';

  // create tailwind classname for this button
  const buttonClass =
    'bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600';

  // create tailwind classname for this error message
  const errorClass = 'text-red-500';

  // create tailwind classname for this form
  const formClass = 'max-w-md mx-auto p-4 bg-white shadow-md rounded-md';

  return (
    <div>
      <form onSubmit={handleSubmit} className={formClass}>
        <input name="email" type="text" className={inputClass} placeholder="Enter your name" />
        <input name="pass" type="password" className={inputClass} placeholder="Enter your password" />
        <button type="submit" className={buttonClass}>
          Submit
        </button>
        <p className={errorClass}>{error}</p>
      </form>
    </div>
  );
}

export default App;
