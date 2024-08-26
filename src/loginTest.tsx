import React, { useState } from 'react';
interface UserLogin {
  email: string;
  password: string;
}

interface LoginValidation {
  checkEmail: string;
  checkPassword: string;
}
const LoginTest = () => {
  const [userLogin, setUserLogin] = useState<UserLogin>({ email: '', password: '' });
  const [validation, setValidation] = useState<LoginValidation>({
    checkEmail: '',
    checkPassword: '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserLogin((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validatedErrors = { checkEmail: '', checkPassword: '' };

    if (!userLogin.email) {
      validatedErrors.checkEmail = 'メールアドレスを入れてください';
    }
    if (!userLogin.password) {
      validatedErrors.checkPassword = 'パスワードを入れてください';
    }
    setValidation(validatedErrors);

    //問題なければ、ログイン実行
    if (!validatedErrors.checkPassword && !validatedErrors.checkEmail) {
      //APIの代わりにコンソールを実行
      console.log(userLogin);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: 250, padding: 2 }}>
        <h1 style={{ textAlign: 'center' }}>User Login</h1>
        <form onSubmit={onSubmit}>
          <label htmlFor="username">
            Email:
            <input
              style={{ margin: '1px 0', padding: '8px', width: '100%', boxSizing: 'border-box' }}
              type="email"
              id="email"
              name="email"
              value={userLogin.email}
              onChange={onChange}
            />
            <p style={{ color: 'red' }}>{validation.checkEmail}</p>
          </label>
          <label htmlFor="password">
            Password:
            <input
              style={{ margin: '1px 0', padding: '8px', width: '100%', boxSizing: 'border-box' }}
              type="password"
              id="password"
              name="password"
              value={userLogin.password}
              onChange={onChange}
            />
            <p style={{ color: 'red' }}>{validation.checkPassword}</p>
          </label>
          <button style={{ width: '100%', padding: '10px', marginTop: '20px', cursor: 'pointer' }} type="submit">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginTest;
