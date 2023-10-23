import React, { ChangeEvent } from "react";
interface Props {
  styles: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = ({ styles, onChange }: Props) => {
  return <input type="checkbox" onChange={onChange} className={styles} />;
};

export default Checkbox;
