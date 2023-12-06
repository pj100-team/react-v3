import { v4 as uuidv4 } from 'uuid'
import { useEffect, useState } from "react";
import styled from "styled-components";

interface Props {
  checkedValue: string[];
  setCheckedValue: React.Dispatch<React.SetStateAction<string[]>>;
  dataArray: {
    date: string;
    todo: string;
  }[];
  todo: string;
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

const Table = ({ checkedValue, setCheckedValue, dataArray, todo }: Props) => {

    const uuid = Math.random()
    

  const ManageCheckbox = (uuid: number) => {
    console.log(uuid)
    console.log(dataArray)
    if (checkedValue.includes(dataArray[uuid].todo)) {
      setCheckedValue(
        checkedValue.filter((item) => item !== dataArray[uuid].todo)
      );
    } else {
      if (checkedValue.length !== 0) {
        setCheckedValue([...checkedValue, dataArray[uuid].todo]);
      } else {
        setCheckedValue([todo]);
      }
    }
  }; //なぜか最初に１つ目のチェックボックスを押した時、indexが末尾になってしまっている

  const allSelect = () => {
    console.log("全選択したい");
  };


  
  
  
 

  
  return (
    <StyledTable>
      <StyledThead>
        <tr>
          <StyledTh>
            <input type="checkbox" onChange={allSelect} />
          </StyledTh>
          <StyledTh>日付</StyledTh>
          <StyledTh>TODO</StyledTh>
          <StyledTh>削除</StyledTh>
        </tr>
      </StyledThead>
      <tbody>
        {dataArray.map((item, uuid) => (
          <tr key={uuid}>
            <td>
              <input
                type="checkbox"
                name={String(uuid)}
                onChange={() => {
                  ManageCheckbox(uuid);
                }}
                // checked={checked}
              />
            </td>
            <td>{item.date}</td>
            <td>{item.todo}</td>
            <td>
              <button>削除</button>
            </td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;
