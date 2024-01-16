interface Props{
    head: string;
}
const Header = ({head}:Props) => {
    return(

<header className="bg-[#94A3B8] text-center p-[20px] text-4xl text-[#F9FAFB] w-full">
{head}
</header>
    )
}
export default Header;