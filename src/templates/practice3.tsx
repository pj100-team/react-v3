import Input from "../components/input";
import Button from "../components/button";
import { FormEvent, useState } from "react";

const Practice3: React.FC = () => {
    const [input, setInput] = useState<string>("");
    const handleChange = (e: FormEvent<HTMLInputElement>) => {
        setInput(e.currentTarget.value);
    };
    const handleClear = () => {
        setInput("");
    };

    return (
        <div className="flex flex-col items-center gap-5">
            <Input
                type="text"
                name="word"
                style="p-form__input"
                onChange={handleChange}
                value={input}
            />
            <Button
                type="button"
                onClick={handleClear}
                style={{
                    txtColor: "text-[#f9fafb]",
                    bgColor: "bg-[#f87171]",
                    borderColor: "border-[#f87171]",
                }}
            >
                リセット
            </Button>
        </div>
    );
};

export default Practice3;
