import { useState } from 'react';

const Login = () => {
  const [address, setAddress] = useState<string>('');
  const [pass, setPass] = useState<string>('');
  const [error, setError] = useState<string>('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (address.length === 0 || pass.length === 0) {
      setError('アドレス及びパスワードを入力してください');
      return false;
    }

    if (address.length > 10 || pass.length > 10) {
      setError('アドレス及びパスワードは10文字以下で入力してください');
      return false;
    }

    setError('');
    console.log('Address:', address);
    console.log('Password:', pass);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-4">
      <form className="flex flex-col space-y-2" onSubmit={onSubmit}>
        <input
          type="text"
          className="border-black border"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input type="password" className="border-black border" value={pass} onChange={(e) => setPass(e.target.value)} />
        <button type="submit" className="border border-black">
          ログイン
        </button>
      </form>
      <p className="text-red-500">{error}</p>
    </div>
  );
};

export default Login;
