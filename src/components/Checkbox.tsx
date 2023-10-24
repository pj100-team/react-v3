import React, { ChangeEvent } from "react";
interface Props {
  styles: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
<<<<<<< HEAD
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
=======
}

const Checkbox = ({ styles, onChange }: Props) => {
  return <input type="checkbox" onChange={onChange} className={styles} />;
>>>>>>> d710fe3d486872031b0d265970db2a7fad844e44
};

export default Checkbox;
