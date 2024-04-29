// practice1.tsx

import React from 'react';
import Button from './components/button';

const Practice1: React.FC = () => {
  return (
    <div className='buttonRow'>
      <Button name="button1" className="button1" />
	  <Button name="button2" className="button2" />
	  <Button name="button3" className="button3" />
    </div>
  );
};

export default Practice1;
