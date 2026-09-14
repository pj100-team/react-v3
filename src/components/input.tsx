import type { ChangeEvent } from "react";

type InputStyle = {
    width: string
    height: string
}

type InputProps = {
    type: string
    style: InputStyle
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Input({type, style, onChange}: InputProps) {
    return(
        <input type = {type} style = {style} onChange = {onChange}>
        </input>
    );
}

export default Input;