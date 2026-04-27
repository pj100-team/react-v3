import React, { forwardRef } from 'react';

interface Props {
  type: React.HTMLInputTypeAttribute;
  className: string;
  value?: string;
  isChecked?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLInputElement>;
}

// interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
//   isChecked?: boolean;
//   children?: React.ReactNode;
// }

// const Input: React.FC<Props> = ({ type, className, value, isChecked, onChange, children, ref, ...rest }) => {
//   return (
//     <div>
//       <input className={className} {...rest} />
//       {children}
//     </div>
//   );
// };

const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ type, className, isChecked, children, value, onChange, ...props }, ref) => {
    return (
      <div>
        <input
          type={type}
          className={className}
          onChange={onChange}
          value={value}
          checked={isChecked}
          {...props}
          ref={ref}
        />
        {children}
      </div>
    );
  },
);
export default Input;
