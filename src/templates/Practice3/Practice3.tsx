import React, { useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import styles from './Practice3.module.css';

export const Practice3: React.FC = () => {
  const [text, setText] = useState<string>('');

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleBlur = () => {
    console.log('現在の入力値:', text);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.name);
    setText('');
  };

  return (
    <div className={styles.center}>
      <Input
        id="text"
        type="text"
        value={text}
        onChange={handleTextChange}
        onBlur={handleBlur}
        style={{ border: '1px solid #94A3B8', borderRadius: '5px', padding: '7px' }}
      />
      <Button name="リセット" color="border-[#f87171] bg-[#f87171]" onClick={handleClick} />
    </div>
  );
};

export default Practice3;
