import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const color: string = "text-[#f9fafb]";
const gray: string = "bg-slate-400";
const now = new Date();

const Practice5 = () => {
  const [inputText, setInputText] = useState<string>("");
  const [allCheck, setAllCheck] = useState<boolean>(false);
  const [todoList, setTodoList] = useState<string[][]>();
  const [checkList, setCheckList] = useState<boolean[]>([]);
  // 追加
  const onClickAdd = () => {
    if (inputText === "") return;
    if (todoList !== undefined) {
      setCheckList([...checkList, false]);
      setTodoList([
        ...todoList!,
        [`${now.getFullYear()}/${now.getMonth()}/${now.getDate()}`, inputText],
      ]);
    } else {
      setCheckList([false]);
      setTodoList([
        [`${now.getFullYear()}/${now.getMonth()}/${now.getDate()}`, inputText],
      ]);
    }
    setInputText("");
  };
  //削除
  const deleteRecord = () => {};
  //全削除
  const deleteAll = () => {};
  return (
    <>
      <div className={`flex justify-center ${gray} text-white py-3`}>
        <p>React-V3</p>
      </div>
      <p className="flex justify-center my-10">TodoList</p>
      <div className="flex justify-center my-5">
        <Input
          type="text"
          styles=" h-8 border-2"
          value={inputText}
          onChange={(event) => {
            setInputText(event.target.value);
          }}
        />
        <Button
          buttonName={"追加"}
          backGroundColor={gray}
          color={color}
          onClick={onClickAdd}
        />
      </div>
      <div className="flex justify-center h-10">
        {checkList.includes(true) && (
          <button
            className={`${color} bg-red-500`}
            onClick={() => console.log("button3")}
          >
            {"一括削除"}
          </button>
        )}
      </div>

      {todoList !== undefined && (
        <div className="flex justify-center my-5">
          <table className="table-auto border-collapse border border-slate-400">
            <thead>
              <tr>
                <th className="table-auto border-collapse border border-slate-400">
                  <input
                    type="checkbox"
                    checked={allCheck}
                    onChange={(event) => {
                      const newcheck = [...checkList].fill(
                        event.target.checked
                      );
                      setCheckList(newcheck);
                      setAllCheck(event.target.checked);
                    }}
                    className="flex justify-start"
                  />
                </th>
                <th className="table-auto border-collapse border border-slate-400">
                  登録日
                </th>
                <th className="table-auto border-collapse border border-slate-400">
                  TODO
                </th>
                <th className="table-auto border-collapse border border-slate-400">
                  削除
                </th>
              </tr>
            </thead>
            <tbody>
              <>
                {todoList !== undefined &&
                  todoList.map((todo, index) => (
                    <tr>
                      <td className="table-auto border-collapse border border-slate-400">
                        <Input
                          type="checkbox"
                          styles="flex justify-start"
                          checked={checkList[index]}
                          onChange={(event) => {
                            const nextChecks = checkList.map(
                              (value, mapindex) => {
                                console.log(value);
                                return index === mapindex
                                  ? event.target.checked
                                  : value;
                              }
                            );
                            setCheckList(nextChecks);
                          }}
                        />
                      </td>
                      <td className="table-auto border-collapse border border-slate-400">
                        {todo[0]}
                      </td>
                      <td className="table-auto border-collapse border border-slate-400">
                        {todo[1]}
                      </td>
                      <td className="table-auto border-collapse border border-slate-400">
                        <button
                          onClick={() => {
                            const nextChecks = [...checkList].splice(index);
                            setCheckList(nextChecks);
                            setTodoList([...todoList].splice(index));
                          }}
                        >
                          削除
                        </button>
                      </td>
                    </tr>
                  ))}
              </>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Practice5;
