import styled from "styled-components";
import "./App.css";
import Button from "./components/Button";
import AddressSearch from "./route/practice4";
import { Routes, Route } from "react-router-dom";
import ToDoList from "./route/practice5";
import Header from "./route/Header";

const Styleddiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function App() {
  return (
    <>
      {/*トップページ */}
      <Routes>
        <Route path="" element={<Header head="HOME" />} />
      </Routes>

      <Styleddiv>
        <Routes>
          <Route
            path=""
            element={<Button href="/AddressSearch" text="AddressSearch" />}
          />
        </Routes>
        <Routes>
          <Route
            path=""
            element={<Button href="/TodoList" text="ToDoList" />}
          />
        </Routes>
      </Styleddiv>

      {/* アドレス検索ページ */}
      <Routes>
        <Route path="/AddressSearch" element={<Header head="React-v3" />} />
      </Routes>
      <Routes>
        <Route path="/AddressSearch" element={<AddressSearch />} />
      </Routes>

      {/* ToDoリストページ */}
      <Routes>
        <Route path="/TodoList" element={<Header head="React-v3" />} />
      </Routes>
      <Routes>
        <Route path="/TodoList" element={<ToDoList />} />
      </Routes>
    </>
  );
}

export default App;
