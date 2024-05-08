import React from 'react';
import Button from '../components/Button';

const Practice1: React.FC = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.name);
  };

  return (
    <div className="flex justify-center mt-10 gap-5">
      <Button name="button1" color="#f87171" onClick={handleClick}></Button>

      <Button name="button2" color="#fcd34d" onClick={handleClick}></Button>

      <Button name="button3" color="#86efac" onClick={handleClick}></Button>
    </div>
  );
};

export default Practice1;
