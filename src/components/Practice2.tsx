import React, { useState } from 'react';
import Input from './elements/Input';

const Practice2 = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  return <Input type="checkbox" className="flex mt-4 justify-center" isChecked={isChecked} onChange={handleClick} />;
};

export default Practice2;
