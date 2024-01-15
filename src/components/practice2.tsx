import Input from "./input";
import { useState } from "react";

export default function Practice2() {
    const [isCheck, setIsCheck] = useState<Boolean>(false);
    const handleChange = () => {
        setIsCheck((prev) => !prev);
    };
    return (
        <Input
            type="checkbox"
            name="greeting"
            style="max-w-fit mx-auto flex gap-4"
            onChange={handleChange}
        >
            <p className={isCheck ? "" : "opacity-0 invisible"}>hello world!</p>
        </Input>
    );
}
