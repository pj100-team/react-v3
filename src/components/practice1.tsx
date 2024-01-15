import Button from './button';

export default function Practice1() {
  const handleClick = (e: React.FormEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.innerHTML);
  };
  return (
    <div className="flex justify-center mx-auto gap-10">
      <Button style={'text-[#f9fafb] bg-[#f87171] border-[#f87171]'} onClick={handleClick}>
        button1
      </Button>
      <Button style={'text-[#f9fafb] bg-[#fcd34d] border-[#fcd34d]'} onClick={handleClick}>
        button2
      </Button>
      <Button style={'text-[#f9fafb] bg-[#86efac] border-[#86efac]'} onClick={handleClick}>
        button3
      </Button>
    </div>
  );
}
