import React from 'react';
import { useState } from 'react';
import styles from './Practice.module.scss';

type Props = {
  type?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  show?: boolean;
};

const Input = ({ type, onChange, show }: Props) => {
  return (
    <div className={`${styles.center} ${styles.py2}`}>
      <input type={type} onChange={onChange} />
      {show ? 'Hello World' : ''}
    </div>
  );
};
export default Input;
