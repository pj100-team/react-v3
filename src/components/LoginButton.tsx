type Props = {
  isLogin: boolean;
  onClick: () => void;
};

const LoginButton = ({ isLogin, onClick }: Props) => {
  const label = isLogin ? 'ログアウト' : 'ログイン';
  return (
    <button className="w-32 p-2 bg-gray-300 border-black border-2" onClick={onClick}>
      {label}
    </button>
  );
};

export default LoginButton;
