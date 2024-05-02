import React from 'react';

const handleClick = (buttonName: string) => {
  console.log(buttonName);
};
const Practice1: React.FC = () => {
  return (
    <div className="flex justify-center mt-10 gap-5">
      <button
        name="button1"
        className="border-[#f87171] bg-[#f87171] text-[#f9fafb] rounded-md w-28 h-10"
        onClick={() => handleClick('button1')}
      >
        button1
      </button>

      <button
        name="button2"
        className="border-[#fcd34d] bg-[#fcd34d] text-[#f9fafb] rounded-md w-28 h-10"
        onClick={() => handleClick('button2')}
      >
        button2
      </button>

      <button
        name="button3"
        className=" border-[#86efac] bg-[#86efac] text-[#f9fafb] rounded-md w-28 h-10"
        onClick={() => handleClick('button3')}
      >
        button3
      </button>
    </div>
  );
};

export default Practice1;
