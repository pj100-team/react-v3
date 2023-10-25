import React, { useState } from "react";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Input from "./Input";

const Practice123 = () => {
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
          buttonName="button1"
          backGroundColor="red"
          onClick={() => console.log("button1")}
        />
        <Button
          buttonName="button2"
          backGroundColor="yellow"
          onClick={() => console.log("button2")}
        />
        <Button
          buttonName="button3"
          backGroundColor="green"
          onClick={() => console.log("button3")}
        />
      </div>
      {/* Question2 */}
      <div className="flex justify-center my-10">
        <Checkbox
          styles="flex justify-start"
          onChange={(event) => {
            setIsTextVisibility(event.target.checked);
          }}
          checked={false}
        />
        <label
          className={`block mx-2 ${isTextVisible ? "visible" : "invisible"}`}
        >
          hello world
        </label>
      </div>
      {/* Question3 */}
      <div className="flex justify-center my-10">
        <Input
          styles="h-8 border-2"
          value={inputText}
          onChange={(event) => {
            setInputText(event.target.value);
            console.log(event.target.value);
          }}
        />
        <Button
          buttonName="reset"
          backGroundColor="red"
          onClick={() => {
            setInputText("");
          }}
        />
      </div>
    </>
  );
};

export default Practice123;
