type Props = {
  isLogin: boolean;
};
const LoginInfo = ({ isLogin }: Props) => {
  if (!isLogin) return null;
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>名前</th>
            <th>メールアドレス</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>test</th>
            <th>test@example.com</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LoginInfo;
