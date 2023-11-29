import styled from "styled-components";
import Table from "../components/Table";

const StyledInput = styled.input`
  border: 2px solid;
  color: #94a3b8;
  border-radius: 5px;
  width: 250px;
  height: 35px;

`;
const StyledButton = styled.button`
  background-color: #94a3b8;
  color: #f9fafb;
  border-radius: 5px;
  width: 100px;
  height: 40px;
  font-size: 1.5rem;
  margin:5px;
`;
const StyledText = styled.p`
  text-align: center;
  font-size: 2rem;
`;
const CenteredContainer = styled.div`
  text-align: center;
  margin: 10px;
`;

const ToDoList = () => {
  return (
    <>
      <CenteredContainer>
        <StyledText>TODOList</StyledText>
        <StyledInput />
        <StyledButton>追加</StyledButton>
        <Table />
      </CenteredContainer>
    </>
  );
};

const StyledTODOList = styled(ToDoList)`
  text-align: center;
  margin: 0 auto;
`;

export default ToDoList;
