import React from 'react';
import Button from '../components/Button';

const Practice1: React.FC = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.name);
  };

  return (
    <div className="flex justify-center mt-10 gap-5">
      <Button name="button1" className="border-[#f87171] bg-[#f87171] text-[#f9fafb]" onClick={handleClick}></Button>

      <Button name="button2" className="border-[#fcd34d] bg-[#fcd34d] text-[#f9fafb]" onClick={handleClick}></Button>

      <Button name="button3" className="border-[#86efac] bg-[#86efac] text-[#f9fafb]" onClick={handleClick}></Button>
    </div>
  );
};

export default Practice1;
