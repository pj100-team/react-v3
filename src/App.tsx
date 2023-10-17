import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  /* Question1 */
  const buttonName: string[] = ["button1", "button2", "button3"];
  const buttonBackgroundColor: string[] = [
    "bg-[#f87171]",
    "bg-[#fcd34d]",
    "bg-[#86efac]",
  ];
  const color: string = "text-[#f9fafb]";

  /* Question2 */
  const [textVisible, setTextVisibility] = useState(false);

  return (
    <>
      <div className="flex justify-center bg-slate-400 text-white py-3">
        <p>React-V3</p>
      </div>
      {/* Question1 */}
      <div className="flex justify-center">
        <Button
          buttonName={buttonName[0]}
          borderColor={buttonBackgroundColor[0]}
          backGroundColor={buttonBackgroundColor[0]}
          color={color}
          onClick={() => console.log(buttonName[0])}
        />
        <Button
          buttonName={buttonName[1]}
          borderColor={buttonBackgroundColor[1]}
          backGroundColor={buttonBackgroundColor[1]}
          color={color}
          onClick={() => console.log(buttonName[1])}
        />
        <Button
          buttonName={buttonName[2]}
          borderColor={buttonBackgroundColor[2]}
          backGroundColor={buttonBackgroundColor[2]}
          color={color}
          onClick={() => console.log(buttonName[2])}
        />
      </div>
      {/* Question2 */}
      <div className="flex justify-center">
        <Input
          type="checkbox"
          // ？：静的エラーの原因
          styles="flex justify-start"
          onChange={() =>
            textVisible ? setTextVisibility(false) : setTextVisibility(true)
          }
        ></Input>
        {textVisible && <label className="block mx-2"> hello world</label>}
      </div>
    </>
  );
}

export default App;
