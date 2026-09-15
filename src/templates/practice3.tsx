import {useState} from "react";
import Button from "../components/button";
import Input from "../components/input";

function Practice3() {
    const [value, setValue] = useState("");
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
                name = "reset"
                style = {{
                    borderColor: "#f87171",
                    backgroundColor: "#f87171",
                    color: "#f9fafb",
                    width: "100px",
                    height: "36px",
                    borderRadius: "6px"
                }}
                onClick = {() => setValue("")}
            />
            <Input
                type = "text"
                style = {{
                    width: "30px",
                    height: "30px"
                }}
                onChange = {(e) => {
                    setValue(e.target.value)
                    console.log(e.target.value)
                }}
                value = {value}
            />
        </div>
    );
}

export default Practice3;