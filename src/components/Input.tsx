import React from "react";
interface Props {
  type: string;
  styles: string;
  onChange: () => void;
}

const Input = ({ type, styles, onChange }: Props) => {
  return <input type={type} onChange={onChange} className={styles} />;
};

export default Input;
