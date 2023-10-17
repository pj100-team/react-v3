import "./App.css";
import Button from "./components/Button";

/* Question1 */
const color: string = "text-[#f9fafb]";

function App() {
  return (
    <>
      <div className="flex justify-center bg-slate-400 text-white py-3">
        <p>React-V3</p>
      </div>
      {/* Question1 */}
      <div className="flex justify-center">
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
    </>
  );
}

export default App;
