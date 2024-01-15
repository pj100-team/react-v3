import { ReactNode } from 'react';

type InputType = 'checkbox' | 'text' | 'number' | 'submit' | 'radio';
type Props = Omit<JSX.IntrinsicElements['input'], 'value'> & {
  type: InputType;
  style?: string;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  children?: ReactNode;
  name: string;
  value?: string;
};

const Input: React.FC<Props> = ({ type, style, value, onChange, children, name }) => {
  return (
    <label htmlFor={name} className={type === 'checkbox' ? style : 'flex justify-center max-w-fit'}>
      <input
        id={name}
        value={value}
        className={type !== 'checkbox' ? 'p-form__input' : ''}
        type={type}
        onChange={onChange}
      />
      {children}
    </label>
  );
};

export default Input;
