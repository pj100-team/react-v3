import Input from "../components/input";
import {useState} from "react";

function Practice2() {
    const [checked, setChecked] = useState(false);
    return(
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                gap: "40px",
                marginTop: "40px"
            }}
        >
            <Input
                type = "checkbox"
                style = {{
                    width: "30px",
                    height: "30px"
                }}
                onChange = {(e) => setChecked(e.target.checked)}
                value = ""
            />
            <span
                style = {{
                    visibility: checked ? "visible": "hidden"
                }}
            >
                hello world
            </span>
        </div>
    );
}

export default Practice2;