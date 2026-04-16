import React, { useState } from 'react';
import Input from '../elements/Input';
import Button from '../elements/Button';

const Practice3 = () => {
  const [text, setText] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  const handleClick = () => {
    setText('');
  };

  return (
    <div className="flex justify-center items-center mt-4">
      <Input type="text" className="border border-gray-400 rounded mr-2" value={text} onChange={handleChange} />
      <Button label="Reset" className="bg-blue-500 px-4 py-2 text-[#f9fafb] rounded-xl" onClick={handleClick} />
    </div>
  );
};

export default Practice3;
