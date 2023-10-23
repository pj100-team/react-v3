import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";

/* Question1 */
const color: string = "text-[#f9fafb]";

function App() {
  /* Question2 */
  const [isTextVisible, setIsTextVisibility] = useState<boolean>(false);
  /* Question3 */
  const [inputText, setInputText] = useState<string>("");

  return (
    <>
      <div className="flex justify-center bg-slate-400 text-white py-3">
        <p>React-V3</p>
      </div>
      {/* Question1 */}
      <div className="flex justify-center my-10">
        <Button
          buttonName={"button1"}
          borderColor={"bg-[#f87171]"}
          backGroundColor={"bg-[#f87171]"}
          color={color}
          onClick={() => console.log("button1")}
        />
        <Button
          buttonName={"button2"}
          borderColor={"bg-[#fcd34d]"}
          backGroundColor={"bg-[#fcd34d]"}
          color={color}
          onClick={() => console.log("button2")}
        />
        <Button
          buttonName={"button3"}
          borderColor={"bg-[#86efac]"}
          backGroundColor={"bg-[#86efac]"}
          color={color}
          onClick={() => console.log("button3")}
        />
      </div>
      {/* Question2 */}
      <div className="flex justify-center my-10">
        <Input
          type="checkbox"
          styles="flex justify-start"
          onChange={(event) => {
            setIsTextVisibility(event.target.checked);
          }}
        />
        <label
          className={`block mx-2 ${
            isTextVisible ? "text-black" : "text-transparent"
          }`}
        >
          hello world
        </label>
      </div>
      {/* Question3 */}
      <div className="flex justify-center my-10">
        <Input
          type="text"
          styles=" h-8 border-2"
          value={inputText}
          onChange={(event) => {
            setInputText(event.target.value);
            console.log(event.target.value);
          }}
        />
        <Button
          buttonName={"reset"}
          borderColor={"bg-[#f87171]"}
          backGroundColor={"bg-[#f87171]"}
          color={color}
          onClick={() => {
            setInputText("");
          }}
        />
      </div>
    </>
  );
}

export default App;
