import React, { ChangeEvent } from "react";
interface Props {
  styles: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}

const Checkbox = ({ styles, onChange, checked }: Props) => {
  return (
    <input
      type="checkbox"
      onChange={onChange}
      className={styles}
      checked={checked}
    />
  );
};

export default Checkbox;
