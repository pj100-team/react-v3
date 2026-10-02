import {
    forwardRef,
    type InputHTMLAttributes
} from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
    (props, ref) => {
        return (
            <input
                {...props}
                ref={ref}
            />
        );
    }
);

export default Input;