import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Button from "./components/botton";

function App() {
  const [inputText, setInputText] = useState<string>("");

  return (
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
  );
}

export default App;
