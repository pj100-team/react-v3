import React, { ChangeEvent } from "react";
interface Props {
  value?: string;
  styles: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ styles, value, onChange }: Props) => {
  return (
    <input type="text" value={value} onChange={onChange} className={styles} />
  );
};

export default Input;
