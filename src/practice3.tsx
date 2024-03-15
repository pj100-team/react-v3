import React, { useState } from 'react';
import Input from './components/input';
import Button from './components/button';

const Practice3 = () => {
  const [textValue, setTextValue] = useState<string>('');

  const changeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setTextValue(e.target.value);
  };
  const resetText = () => {
    setTextValue('');
  };
  return (
    <div className="flex justify-center items-center">
      <Input value={textValue} type="text" style="outline outline-1 outline-[#94a3b8] rounded" onChange={changeText} />
      <Button value="Reset" style="bg-[#f87171] text-[#f9fafb] rounded py-1 px-4 mx-2" onClick={resetText} />
    </div>
  );
};

export default Practice3;
