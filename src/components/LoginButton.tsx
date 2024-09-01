type Props = {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoginButton = ({ isLogin, setIsLogin }: Props) => {
  const label = isLogin ? 'ログアウト' : 'ログイン';
  const onClick = () => {
    setIsLogin(!isLogin);
  };
  return (
    <button className="w-32 p-2 bg-gray-300 border-black border-2" onClick={onClick}>
      {label}
    </button>
  );
};

export default LoginButton;
