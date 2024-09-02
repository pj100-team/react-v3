import { useState } from 'react';
import './App.css';
import LoginButton from './components/LoginButton';
import StateLabel from './components/StateLabel';
import LoginInfo from './components/LoginInfo';

function App() {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const onClick = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <LoginButton isLogin={isLogin} onClick={onClick} />
      <StateLabel isLogin={isLogin} />
      <LoginInfo isLogin={isLogin} />
    </div>
  );
}

export default App;
