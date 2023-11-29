import styled from "styled-components";

const StyledTable = styled.table`
  border: solid 2px;
  margin: auto;
  width: 75%;
  font-size: 1.5rem;
  margin-top: 30px;
`;
const StyledThead = styled.thead``;
const StyledTh = styled.th`
  background-color: #94a3b8;
  color: #f9fafb;
`;

const Table = () => {
  const dataArray = [
    { date: "2023/11/29", todo: "掃除", delete: "削除" },
    { date: "2023/11/30", todo: "洗濯", delete: "削除" },
  ];
  return (
    <StyledTable>
      <StyledThead>
        <tr>
          <StyledTh>
            <input type="checkbox" />
          </StyledTh>
          <StyledTh>日付</StyledTh>
          <StyledTh>TODO</StyledTh>
          <StyledTh>削除</StyledTh>
        </tr>
      </StyledThead>
      <tbody>
        {dataArray.map((item, index) => (
          <tr key={index}>
            <td>
              <input type="checkbox" />
            </td>
            <td>{item.date}</td>
            <td>{item.todo}</td>
            <td>{item.delete}</td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;
