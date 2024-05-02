import React from 'react';
import Button from '../components/button';

const handleButtonClick1 = () => {
  console.log('button1');
};

const handleButtonClick2 = () => {
  console.log('button2');
};

const handleButtonClick3 = () => {
  console.log('button3');
};

const Practice1: React.FC = () => {
  return (
    <div className="flex justify-center mt-10 gap-5">
      <button
        className="border-[#f87171] bg-[#f87171] text-[#f9fafb] rounded-md w-28 h-10"
        onClick={handleButtonClick1}
      >
        Button 1
      </button>

      <button
        className="border-[#fcd34d] bg-[#fcd34d] text-[#f9fafb] rounded-md w-28 h-10"
        onClick={handleButtonClick2}
      >
        Button 2
      </button>

      <button
        className=" border-[#86efac] bg-[#86efac] text-[#f9fafb] rounded-md w-28 h-10"
        onClick={handleButtonClick3}
      >
        Button 3
      </button>
    </div>
  );
};

export default Practice1;
