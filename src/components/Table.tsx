import { useState } from "react";
import styled from "styled-components";

interface Props {
  checkedValue: string[];
  setCheckedValue: React.Dispatch<React.SetStateAction<string[]>>;
  dataArray: {
    date: string;
    todo: string;
  }[];
  setDataArray: React.Dispatch<
    React.SetStateAction<
      {
        date: string;
        todo: string;
      }[]
    >
  >;
}
const StyledTable = styled.table`
  margin: auto;
  width: 75%;
  font-size: 24px;
  margin-top: 10px;
  position: relative;
  text-align: center;
  width: 100%;
  border: solid 2px;
`;
const StyledThead = styled.thead``;
const StyledTh = styled.th`
  background-color: #94a3b8;
  border: solid 2px;
`;
const StyledDeleteButton = styled.button`
  background-color: red;
  border-radius: 5px;
  color: #f9fafb;
  padding: 3px;
  position: absolute;
  top: 0;
  left: 0;
`;
const StyledDiv = styled.div`
  position: relative;
  margin-left: 10%;
  margin-right: 10%;
  padding-top: 30px;
  margin-top: 75px;
`;
const StyledTbody = styled.tbody`
  border: solid 2px;
`;
const StyledTr = styled.tr`
  border: solid 2px;
`;
const StyledP = styled.p`
  color: #f9fafb;
`;
const StyledTd = styled.td`
border: solid 2px;
`

const Table = ({
  checkedValue,
  setCheckedValue,
  dataArray,
  setDataArray,
}: Props) => {
  const [checked, setChecked] = useState(false);

  const ManageCheckbox = (index: number) => {
    if (checkedValue.includes(dataArray[index].todo)) {
      setCheckedValue(
        checkedValue.filter((item) => item !== dataArray[index].todo)
      );
    } else {
      if (checkedValue.length !== 0) {
        setCheckedValue([...checkedValue, dataArray[index].todo]);
      } else {
        setCheckedValue([dataArray[index].todo]);
      }
    }
  };

  const allSelect = () => {
    if (checked == false) {
      const allCheckedValue = dataArray.map((item) => {
        return item.todo;
      });
      setCheckedValue(allCheckedValue);
    }
  };
  const deleteTask = (index: number) => {
    setDataArray(dataArray.filter((item) => item !== dataArray[index]));
    if (checkedValue.includes(dataArray[index].todo)) {
      setCheckedValue(
        checkedValue.filter((item) => item !== dataArray[index].todo)
      );
    }
  };
  const handleDelete = () => {
    let newDataArray: { date: string; todo: string }[] = [];
    for (let i = 0; i < dataArray.length; i++) {
      if (checkedValue.includes(dataArray[i].todo)) {
      } else {
        if (newDataArray.length !== 0) {
          newDataArray = [...newDataArray, dataArray[i]];
        } else {
          newDataArray = [dataArray[i]];
        }
      }
    }
    setDataArray(newDataArray);
    setCheckedValue([]);
    setChecked(false);
  };

  return (
    <StyledDiv>
      <div>
        <StyledDeleteButton onClick={handleDelete}>一括削除</StyledDeleteButton>
      </div>
      <StyledTable>
        <StyledThead>
          <tr>
            <StyledTh>
              <input
                type="checkbox"
                checked={checked}
                onChange={(e) => {
                  setChecked(true);
                  allSelect();
                }}
              />
            </StyledTh>
            <StyledTh>
              <StyledP>登録日</StyledP>
            </StyledTh>
            <StyledTh>
              <StyledP>TODO</StyledP>
            </StyledTh>
            <StyledTh>
              <StyledP>削除</StyledP>
            </StyledTh>
          </tr>
        </StyledThead>
        <StyledTbody>
          {dataArray.map((item, index) => (
            <StyledTr key={index}>
              <StyledTd>
                <input
                  type="checkbox"
                  name={String(index)}
                  onChange={() => {
                    ManageCheckbox(index);
                  }}
                  checked={checkedValue.includes(item.todo)}
                />
              </StyledTd>
              <StyledTd>{item.date}</StyledTd>
              <StyledTd>{item.todo}</StyledTd>
              <StyledTd>
                <button onClick={() => deleteTask(index)}>削除</button>
              </StyledTd>
            </StyledTr>
          ))}
        </StyledTbody>
      </StyledTable>
    </StyledDiv>
  );
};

export default Table;
