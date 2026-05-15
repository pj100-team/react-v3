import React, { forwardRef } from 'react';

interface Props {
  type: React.HTMLInputTypeAttribute;
  className: string;
  value?: string;
  isChecked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, Props>(({ children, isChecked, ...props }, ref) => {
  return (
    <div>
      <input {...props} ref={ref} checked={isChecked} />
      {children}
    </div>
  );
});
export default Input;
