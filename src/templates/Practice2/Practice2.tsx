import React, { useState } from 'react';
import Input from '../../components/Input';
import styles from './Practice2.module.css';

export const Practice2: React.FC = () => {
  const [isTextChecked, setIsTextChecked] = useState<boolean>(false);
  const [isNameChecked, setIsNameChecked] = useState<boolean>(false);
  const [isEmailChecked, setIsEmailChecked] = useState<boolean>(false);

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsTextChecked(event.target.checked);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsNameChecked(event.target.checked);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsEmailChecked(event.target.checked);
  };

  return (
    <>
      <label htmlFor="text" className={styles.center}>
        <Input id="text" type="checkbox" onChange={handleTextChange} />
        {isTextChecked && <span className={styles.space}>Hello world</span>}
      </label>
      <label htmlFor="name" className={styles.center}>
        <Input id="name" type="checkbox" onChange={handleNameChange} />
        {isNameChecked && <span className={styles.space}>樋口恵太朗</span>}
      </label>
      <label htmlFor="email" className={styles.center}>
        <Input id="email" type="checkbox" onChange={handleEmailChange} />
        {isEmailChecked && <span className={styles.space}>aiful.com</span>}
      </label>
    </>
  );
};

export default Practice2;
