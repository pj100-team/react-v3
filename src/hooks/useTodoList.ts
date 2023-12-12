import { useEffect, useState } from "react";

export const useTodoList = () => {
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
      setDataArray([...dataArray, { date, todo }]);
    } else {
      setDataArray([{ date, todo }]);
    }
    
  };
  return {setTodo, getTodoDate, AddTask, dataArray, checkedValue, setCheckedValue, setDataArray};
};
