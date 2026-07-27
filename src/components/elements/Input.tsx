import React, { forwardRef } from 'react';

interface InputProps {
  type: React.HTMLInputTypeAttribute;
  className: string;
  value?: string;
  isChecked?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ children, ...props }, ref) => {
  return (
    <div>
      <input {...props} ref={ref} />
      {children}
    </div>
  );
});
export default Input;