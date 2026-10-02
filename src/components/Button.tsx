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
    onClick: () => void;
}

function Button({name, style, onClick}: ButtonProps) {
    return(
        <button style = {style} onClick = {onClick}>
            {name}
        </button>
    );
}

export default Button;