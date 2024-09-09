import { useState } from 'react';
import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // ログインボタンのtailwind
  const loginButton = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded';

  // ログイン状態のメッセージのtailwind
  const loginMessage = 'text-blue-500';

  // form提出時に、ダミーの値をemailとpasswordにセット
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isLogin) {
      setIsLogin(false);
      setEmail('');
      setPassword('');
      return;
    }

    setIsLogin(true);
    setEmail('hoge@example.com');
    setPassword('password');
  };

  return (
    <form onSubmit={handleSubmit}>
      <button className={loginButton} type="submit">
        {isLogin ? 'ログアウト' : 'ログイン'}
      </button>
      <h1 className={loginMessage}>{isLogin ? 'ログイン中です' : 'ログインしてください'}</h1>
      {isLogin && (
        <div>
          <p>メールアドレス</p>
          <p>{email}</p>
          <p>パスワード</p>
          <p>{password}</p>
        </div>
      )}
    </form>
  );
}

export default App;
