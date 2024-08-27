import React, { useState } from 'react';

const MidTest2 = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const Login = () => {
    setIsLogin((isLogin) => !isLogin);
  };

  return (
    <div
      style={{
        flexDirection: 'column',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      {isLogin ? (
        <div style={{ textAlign: 'center' }}>
          <p>Login中です</p>
          <p>ユーザー名称:WWk</p>
          <p>ユーザーメール:WWk@aiful.com</p>
        </div>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <p>Loginしてください</p>
        </div>
      )}
      <button style={{ padding: '10px', marginTop: '20px', cursor: 'pointer', maxWidth: '200px' }} onClick={Login}>
        {isLogin ? 'Logout' : 'Login'}
      </button>
    </div>
  );
};

export default MidTest2;
