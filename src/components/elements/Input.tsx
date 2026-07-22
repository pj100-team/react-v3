 practice4_shake
import React, { forwardRef } from 'react';


interface Props {
  type: React.HTMLInputTypeAttribute;
  className: string;
  value?: string;
  isChecked?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
}

 practice4_shake
const Input = forwardRef<HTMLInputElement, Props>(({ children, ...props }, ref) => {
  return (
    <div>
      <input {...props} ref={ref} />

      {children}
    </div>
  );
});
export default Input;