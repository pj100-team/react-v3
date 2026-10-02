type ButtonStyle = {
    borderColor: string;
    backgroundColor: string;
    color: string;
    width: string;
    height: string;
    borderRadius: string;
}

type ButtonProps = {
    name: string;
    style: ButtonStyle;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
}

function Button({name, style, onClick, type = "button"}: ButtonProps) {
    return(
        <button type = {type} style = {style} onClick = {onClick}>
            {name}
        </button>
    );
}

export default Button;