import Button from "../components/button";

function Practice1() {
    return(
        <>
            <Button
                name = "Button1"
                style = {{
                    borderColor: "#f87171",
                    backgroundColor: "#f87171",
                    color: "#f9fafb"
                }}
                onClick = {() => console.log("Button1")}
            /> 
            <Button
                name = "Button2"
                style = {{
                    borderColor: "#fcd34d",
                    backgroundColor: "#fcd34d",
                    color: "#f9fafb"
                }}
                onClick = {() => console.log("Button2")}
            /> 
            <Button
                name = "Button3"
                style = {{
                    borderColor: "#86efac",
                    backgroundColor: "#86efac",
                    color: "#f9fafb"
                }}
                onClick = {() => console.log("Button3")}
            /> 
        </>
    );
}

export default Practice1;