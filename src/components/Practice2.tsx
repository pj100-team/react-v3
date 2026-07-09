import React, { useState } from 'react';
import Input from './elements/Input';

const Practice2 = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  return (
    <Input type="checkbox" className="flex mt-4 justify-center" isChecked={isChecked} onChange={handleClick}>
      <p className={`ml-3 ${isChecked ? 'visible' : 'invisible'}`}>hello world</p>
    </Input>
  );
};

export default Practice2;