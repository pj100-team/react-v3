import Input from "./input";
import { useState } from "react";

export default function Practice2() {
    const [checkbox, setCheckbox] = useState<Boolean>(false);
    const handleChange = () => {
        setCheckbox((onChange) => !onChange);
    };
    return (
        <Input
            type="checkbox"
            name="greeting"
            style="max-w-fit mx-auto flex gap-4"
            onChange={handleChange}
        >
            <p className={!checkbox ? "opacity-0 invisible" : ""}>
                hello world!
            </p>
        </Input>
    );
}
