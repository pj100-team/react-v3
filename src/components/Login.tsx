import { useState } from 'react';

const Login = () => {
  const [address, setAddress] = useState<string>('');
  const [pass, setPass] = useState<string>('');

  const onSubmit = () => {
    console.log('Address:', address);
    console.log('Password:', pass);
  };

  return (
    <div className="flex justify-center items-center mt-4">
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
    </div>
  );
};

export default Login;
