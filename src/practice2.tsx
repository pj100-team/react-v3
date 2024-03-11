import React from 'react';
import Input from './components/input';
import { useState } from 'react';

const Practice2 = () => {
  const [showText, setShowText] = useState<boolean>(false);
  const toggleCheckBox = () => {setShowText(!showText)};

  return (
    <div>
      <Input type="checkbox" onChange={toggleCheckBox} show={showText} />
    </div>
  );
};

export default Practice2;
