import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import TableContent from "./TableContent";

const color: string = "text-[#f9fafb]";
const gray: string = "bg-slate-400";
const now = new Date();

const Practice5 = () => {
  const [inputText, setInputText] = useState<string>("");
  const [todoList, setTodoList] = useState<string[][]>();
  const [isButtonVisible, setButtonVisible] = useState<boolean>(false);
  const [isTableVisible, setTableVisibility] = useState<boolean>(false);

  const onClickAdd = () => {
    if (inputText === "") return;
    if (todoList !== undefined) {
      setTodoList([...todoList!, [`${now.getFullYear()}`, inputText]]);
    } else {
      setTodoList([[`${now.getFullYear()}`, inputText]]);
    }

    setInputText("");
  };
  return (
    <>
      <div className={`flex justify-center ${gray} text-white py-3`}>
        <p>React-V3</p>
      </div>
      <p className="flex justify-center my-10">TodoList</p>
      <div className="flex justify-center my-10">
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
      {isButtonVisible && (
        <div className="flex justify-center my-10">
          <Button
            buttonName={"一括削除"}
            backGroundColor="bg-red-500"
            color={color}
            onClick={() => console.log("button3")}
          />
        </div>
      )}
      {!isTableVisible && (
        <div className="flex justify-center my-10">
          <table className="table-auto border-collapse border border-slate-400">
            <thead>
              <tr>
                <th className="table-auto border-collapse border border-slate-400">
                  <Input
                    type="checkbox"
                    styles="flex justify-start"
                    onChange={() => {}}
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
              <TableContent todoList={todoList!} />
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Practice5;
