import React, { useState } from 'react';
import Input from './components/input';

const Practice2 = () => {
  const [isVisibled, setIsVisibled] = useState<boolean>(false);
  const toggleCheckBox = () => {
    setIsVisibled((prev) => !prev);
  };

  return (
    <div>
      <Input type="checkbox" onChange={toggleCheckBox} isVisibled={isVisibled} />
    </div>
  );
};

export default Practice2;
