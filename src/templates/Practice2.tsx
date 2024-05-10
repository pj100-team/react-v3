import React, { useState } from 'react';
import Input from '../components/Input';
import styles from '../components/Practice2.module.css';

const Practice2: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className={styles.center}>
      <Input type="checkbox" onChange={handleCheckboxChange} />
      {isChecked && <span className={styles.space}>Hello world</span>}
    </div>
  );
};

export default Practice2;
