type Props = {
  title: string;
};

const Header = ({ title }: Props) => {
  return <header className="bg-[#94A3B8] text-center p-[20px] text-4xl text-[#F9FAFB]">{title}</header>;
};

export default Header;
