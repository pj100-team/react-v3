import styled from "styled-components";
import Table from "../components/Table";
import { useEffect, useState } from "react";
import { useTodoList } from "../hooks/useTodoList";

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
  font-size: 24px;
  margin-left: 30px;
`;
const StyledText = styled.p`
  text-align: center;
  font-size: 32px;
  margin: 16px;
`;
const CenteredContainer = styled.div`
  text-align: center;
  margin: 10px;
`;



const ToDoList = () => {
const {setTodo, getTodoDate, AddTask, dataArray, checkedValue, setCheckedValue, setDataArray} = useTodoList()


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
        {dataArray.length ? 
        <Table 
          checkedValue={checkedValue}
          setCheckedValue={setCheckedValue}
          dataArray={dataArray}
          setDataArray={setDataArray}
        /> : <></>}
    </>
  );
};

const StyledTODOList = styled(ToDoList)`
  text-align: center;
  margin: 0 auto;
`;

export default ToDoList;
