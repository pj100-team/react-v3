import React from 'react';
import styles from './Practice.module.scss';

type Props = {
  type: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  isVisibled: boolean;
};

const Input = ({ type, onChange, isVisibled: show }: Props) => {
  return (
    <div className={styles.container}>
      <input type={type} onChange={onChange} />
      {show ? 'Hello World' : ''}
    </div>
  );
};
export default Input;
