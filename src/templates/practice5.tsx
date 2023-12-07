import styled from "styled-components";
import Table from "../components/Table";
import { useEffect, useState } from "react";

const StyledInput = styled.input`
  border: 2px solid;
  color: #94a3b8;
  border-radius: 5px;
  width: 250px;
  height: 40px;
`;
const StyledButton = styled.button`
  background-color: #94a3b8;
  color: #f9fafb;
  border-radius: 5px;
  width: 100px;
  height: 40px;
  font-size: 1.5rem;
  margin-left: 30px;
`;
const StyledText = styled.p`
  text-align: center;
  font-size: 2rem;
  margin: 1rem;
`;
const CenteredContainer = styled.div`
  text-align: center;
  margin: 10px;
`;



const ToDoList = () => {
  const [date, setDate] = useState("");
  const [dateList, setdateList] = useState<string[]>([]);
  const [todo, setTodo] = useState<string>("");
  const [checkedValue, setCheckedValue] = useState<string[]>([]);
  const [dataArray, setDataArray] = useState<{ date: string; todo: string }[]>(
    []
  );

  useEffect(() => {
    setInterval(() => {
      let d = new Date();
      let year = d.getFullYear();
      let month = d.getMonth() + 1;
      let day = d.getDate();
      setDate(year + "/" + month + "/" + day);
    });
  }, []);
  const getTodoDate = () => {
    if (dateList.length !== 0) {
      setdateList([...dateList, date]);
    } else if (dateList.length === 0) {
      setdateList([date]);
    }
  };
  const AddTask = () => {
    if (dataArray.length !== 0) {
      setDataArray([...dataArray, { date: date, todo: todo }]);
    } else {
      setDataArray([{ date: date, todo: todo }]);
    }
  };


  return (
    <>
      <CenteredContainer>
        <StyledText>TODOList</StyledText>
        <StyledInput
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <StyledButton
          onClick={() => {
            getTodoDate();
            AddTask();
          }}
        >
          追加
        </StyledButton>
        </CenteredContainer>
        <Table
          checkedValue={checkedValue}
          setCheckedValue={setCheckedValue}
          dataArray={dataArray}
          setDataArray={setDataArray}
        />
    </>
  );
};

const StyledTODOList = styled(ToDoList)`
  text-align: center;
  margin: 0 auto;
`;

export default ToDoList;
