import React, { useState } from "react";

const Practice5 = () => {
  const [inputTodo, setInputTodo] = useState("");
  const [todo, setTodo] = useState<{ text: string; isChecked: boolean }[]>([]);
  const [isChecked, setIsChecked] = useState(false);

  const InputTodoList = (e: any) => {
    setInputTodo(e.target.value);
  };

  const onClickAdd = () => {
    const newTodos = [...todo, { text: inputTodo, isChecked: false }];
    setTodo(newTodos);
    setInputTodo("");
  };

  const onClickDelete = (itemToDelete: string) => {
    const newTodos = todo.filter((item) => item.text !== itemToDelete);
    setTodo(newTodos);
  };

  const onClickAllDelete = () => {
    setTodo([]);
  };

  const onChangeIsChecked = (index: number) => {
    const newTodos = [...todo];
    newTodos[index].isChecked = !newTodos[index].isChecked;
    setTodo(newTodos);
  };

  // todo

  
  

  return (
    <>
      <h1>TodoList</h1>
      <input onChange={InputTodoList} />
      <button onClick={onClickAdd}>追加</button>
      <button onClick={onClickAllDelete}>全削除</button>
      <button onClick={onClickCheckedDelete}>checkしたものをさくじょ</button>
      <table border={1}>
        <tr>
          <th>☑︎</th>
          <th>登録日</th>
          <th>TODO</th>
          <th>削除</th>
        </tr>
        {todo.map((todos, index) => (
          <tr key={index}>
            <td>
              <input
                type="checkbox"
                onChange={() => onChangeIsChecked(index)}
                checked={todos.isChecked}
              />
            </td>
            <td>2023</td>
            <td>{todos.text}</td>
            <td>
              <button onClick={() => onClickDelete(todos.text)}>削除</button>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default Practice5;
