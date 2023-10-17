import React, { ChangeEvent } from "react";
interface Props {
  type: "text" | "checkbox";
  value?: string;
  styles: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ type, styles, value, onChange }: Props) => {
  if (type === "text") {
    return (
      <input type={type} value={value} onChange={onChange} className={styles} />
    );
  } else {
    return <input type={type} onChange={onChange} className={styles} />;
  }
};

export default Input;
