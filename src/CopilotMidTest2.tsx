import React, { useState } from 'react';

const CopilotMidTest2: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = { name: '山田太郎', email: 'taro.yamada@example.com' };

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>ログイン中です</p>
          <p>名前: {user.name}</p>
          <p>メールアドレス: {user.email}</p>
        </div>
      ) : (
        <p>ログインしてください</p>
      )}
      <button onClick={toggleLogin}>{isLoggedIn ? 'ログアウト' : 'ログイン'}</button>
    </div>
  );
};

export default CopilotMidTest2;
