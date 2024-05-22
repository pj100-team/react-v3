import React, { useState } from 'react';
import Input from '../../components/Input';
import styles from './Practice2.module.css';

export const Practice2: React.FC = () => {
  const [isTextChecked, setIsTextChecked] = useState<boolean>(false);

  const handleChange = () => {
    setIsTextChecked((prev) => !prev);
  };

  return (
    <div className={styles.center}>
      <Input id="text" type="checkbox" checked={isTextChecked} onChange={handleChange}>
        <span className={`${styles.space} ${isTextChecked ? '' : styles.hidden}`}>Hello World</span>
      </Input>
    </div>
  );
};

export default Practice2;
