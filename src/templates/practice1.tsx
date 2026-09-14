import Button from "../components/button";

function Practice1() {
    return(
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                gap: "40px",
                marginTop: "40px"
            }}
        >
            <Button
                name = "Button1"
                style = {{
                    borderColor: "#f87171",
                    backgroundColor: "#f87171",
                    color: "#f9fafb",
                    width: "100px",
                    height: "36px",
                    borderRadius: "6px"
                }}
                onClick = {() => console.log("Button1")}
            /> 
            <Button
                name = "Button2"
                style = {{
                    borderColor: "#fcd34d",
                    backgroundColor: "#fcd34d",
                    color: "#f9fafb",
                    width: "100px",
                    height: "36px",
                    borderRadius: "6px"
                }}
                onClick = {() => console.log("Button2")}
            /> 
            <Button
                name = "Button3"
                style = {{
                    borderColor: "#86efac",
                    backgroundColor: "#86efac",
                    color: "#f9fafb",
                    width: "100px",
                    height: "36px",
                    borderRadius: "6px"
                }}
                onClick = {() => console.log("Button3")}
            /> 
        </div>
    );
}

export default Practice1;