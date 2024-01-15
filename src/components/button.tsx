import React, { ReactNode } from "react";

type Props = {
    children: ReactNode;
    style: {
        bgColor: string;
        txtColor: string;
        borderColor: string;
    };
    type?: "submit" | "button";
    onClick?: (e: React.FormEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<Props> = ({
    children,
    style,
    type = "button",
    onClick,
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`practice1_btn ${style.txtColor} ${style.bgColor} ${style.borderColor}`}
        >
            {children}
        </button>
    );
};

export default Button;
