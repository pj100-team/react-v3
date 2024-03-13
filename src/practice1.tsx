import React from 'react';
import Button from './components/button';

const Practice1 = () => {
  const getValue = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log((e.target as HTMLButtonElement).value);
  };
  return (
    <div className="flex justify-center py-5">
      <Button value="button1" style="bg-[#f87171] text-[#f9fafb] rounded py-1 px-4 mx-2" onClick={getValue} />
      <Button value="button2" style="bg-[#fcd34d] text-[#f9fafb] rounded py-1 px-4 mx-2" onClick={getValue} />
      <Button value="button3" style="bg-[#86efac] text-[#f9fafb] rounded py-1 px-4 mx-2" onClick={getValue} />
    </div>
  );
};

export default Practice1;
