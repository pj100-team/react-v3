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

const Table = ({
  checkedValue,
  setCheckedValue,
  dataArray,
  setDataArray,
}: Props) => {
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
    const allCheckedValue = dataArray.map((item) => {
      return item.todo;
    });
    setCheckedValue(allCheckedValue);
  };
  const deleteTask = (index: number) => {
    setDataArray(dataArray.filter((item) => item !== dataArray[index]));
    if (checkedValue.includes(dataArray[index].todo)) {
      setCheckedValue(
        checkedValue.filter((item) => item !== dataArray[index].todo)
      );
    }
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
        {dataArray.map((item, index) => (
          <tr key={index}>
            <td>
              <input
                type="checkbox"
                name={String(index)}
                onChange={() => {
                  ManageCheckbox(index);
                }}
                checked={checkedValue.includes(item.todo)}
              />
            </td>
            <td>{item.date}</td>
            <td>{item.todo}</td>
            <td>
              <button onClick={() => deleteTask(index)}>削除</button>
            </td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;
