import styled from "styled-components";
import "./App.css";
import Button from "./components/Button";
const Styleddiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  justify-content: center;
`;
const Container = styled.div`
display: flex;
  justify-content: center;
  align-items: center;  `;

function App() {
  return (
    <>
      <header className="bg-[#94A3B8] text-center p-[20px] text-4xl text-[#F9FAFB]">
        HOME
      </header>
      <Container/>
      <Styleddiv>
      <Button text="AddressSearch"/>
      <Button text="ToDoList"/>
      </Styleddiv>
      <Container />
    </>
  );
}

export default App;
