import Button from './button';

export default function Practice1() {
  const handleClick = (e: React.FormEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.innerHTML);
  };
  return (
    <div className="flex justify-center mx-auto gap-10">
      <Button
        style={{
          txtColor: 'text-[#f9fafb]',
          bgColor: 'bg-[#f87171]',
          borderColor: 'border-[#f87171]',
        }}
        onClick={handleClick}
      >
        button1
      </Button>
      <Button
        style={{
          txtColor: 'text-[#f9fafb]',
          bgColor: 'bg-[#fcd34d]',
          borderColor: 'border-[#fcd34d]',
        }}
        onClick={handleClick}
      >
        button2
      </Button>
      <Button
        style={{
          txtColor: 'text-[#f9fafb]',
          bgColor: 'bg-[#86efac]',
          borderColor: 'border-[#86efac]',
        }}
        onClick={handleClick}
      >
        button3
      </Button>
    </div>
  );
}
