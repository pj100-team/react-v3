type Props = {
  isLogin: boolean;
};

const StateLabel = ({ isLogin }: Props) => {
  const label = isLogin ? 'ログイン中です' : 'ログインしてください';
  return <p>{label}</p>;
};

export default StateLabel;
