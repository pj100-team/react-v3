import styled from "styled-components";
import "./App.css";
import Button from "./components/Button";
import AddressSearch from "./route/practice4";
import { Routes, Route } from "react-router-dom";
import ToDoList from "./route/practice5";
import { useNavigate } from 'react-router-dom'; 

const Styleddiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  justify-content: center;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const navigate = useNavigate();
  return (
    <>
      <header className="bg-[#94A3B8] text-center p-[20px] text-4xl text-[#F9FAFB]">
        HOME
      </header>
      <Container />
      <Styleddiv>
        <Routes>
          <Route path="" element={<Button href="/AddressSearch"text="AddressSearch" />} />
        </Routes>
        <Routes>
          <Route path="" element={<Button href="/TodoList" text="ToDoList" />} />
        </Routes>
        <Routes>
          <Route path="/AddressSearch" element={<AddressSearch />} />
          <Route path="/TodoList" element={<ToDoList />} />
        </Routes>
      </Styleddiv>
      <Container />
    </>
  );
}

export default App;
