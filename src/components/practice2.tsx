import React, { useState } from 'react';
import Input from './input';

const Practice2: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex items-start justify-center h-screen p-5">
      <div className="flex items-center">
        <Input
          type="checkbox"
          onChange={(e) => setIsChecked(e.target.checked)}
          className="mr-2 -ml-5"
        />
        <span className={`ml-2 ${!isChecked ? 'invisible' : ''}`}>
          Hello World
        </span>
      </div>
    </div>
  );
};

export default Practice2;
