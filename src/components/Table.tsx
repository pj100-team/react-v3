import { useEffect, useState } from "react";
import styled from "styled-components";

interface Props{
    checkedValue: string[] ,
    setCheckedValue: React.Dispatch<React.SetStateAction<string[]>>
}
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

const Table = ({checkedValue, setCheckedValue}:Props) => {
  const dataArray = [
    { date: "2023/11/29", todo: "掃除"},
    { date: "2023/11/30", todo: "洗濯"},
  ];
// for(i=0;i<date.length; i++){
//     dataArray[date] = date[i]
// }
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
              <input type="checkbox" checked={checkedValue.includes("あ")} onChange={()=>{setCheckedValue([...checkedValue, ])}}/>
            </td>
            <td>{item.date}</td>
            <td>{item.todo}</td>
            <td><button>削除</button></td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;
