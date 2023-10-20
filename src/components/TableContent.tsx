import React from "react";
import Input from "./Input";

interface Props {
  todoList: string[][];
}

const TableContent = ({ todoList }: Props) => {
  for (let i = 0; i < todoList.length; i++) {}
  return (
    <>
      {todoList.map((todo) => (
        <tr>
          <td className="table-auto border-collapse border border-slate-400">
            <Input
              type="checkbox"
              styles="flex justify-start"
              onChange={() => {}}
            />
          </td>
          <td className="table-auto border-collapse border border-slate-400">
            {todo[0]}
          </td>
          <td className="table-auto border-collapse border border-slate-400">
            {todo[1]}
          </td>
          <td className="table-auto border-collapse border border-slate-400">
            <button>削除</button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default TableContent;
