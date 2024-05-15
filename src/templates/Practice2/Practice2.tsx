import React, { useState } from 'react';
import Input from '../../components/Input';
import styles from './Practice2.module.css';

const Practice2: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <label className={styles.center}>
      <Input type="checkbox" onChange={handleCheckboxChange} />
      {isChecked && <span className={styles.space}>Hello world</span>}
    </label>
  );
};

export default Practice2;
