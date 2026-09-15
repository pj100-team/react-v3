import type { ChangeEvent } from "react";

type InputStyle = {
    width: string
    height: string
}

type InputProps = {
    type: string
    style: InputStyle
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value: string
}

function Input({type, style, onChange, value}: InputProps) {
    return(
        <input type = {type} style = {style} onChange = {onChange} value = {value}>
        </input>
    );
}

export default Input;