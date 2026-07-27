import React from 'react';
import Input from '../elements/Input';
import Button from '../elements/Button';

type TodoType = {
  id: number;
  content: string;
  date: string;
  checked: boolean;
};

function Practice5() {
  const [inputText, setInputText] = React.useState<string>('');

  const [todos, setTodos] = React.useState<TodoType[]>([]);

  const handleClick = () => {
    const newTodo: TodoType = {
      id: Date.now(),
      content: inputText,
      date: new Date().toLocaleDateString(),
      checked: false,
    };
    setTodos([...todos, newTodo]);
    setInputText('');
  };

  const handleAllCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    const newTodos = todos.map((t) => ({
      ...t,
      checked: checked,
    }));
    setTodos(newTodos);
  };

  const handleCheck = (id: number) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t)));
  };

  const handleDeleteAll = () => {
    setTodos(todos.filter((t) => !t.checked));
  };

  const handleDeleteSelected = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const hasChecked = todos.some((t) => t.checked);

  return (
    <>
      <div className="flex justify-center mt-4 mb-4 text-2xl">TODOLIST</div>
      <div className="flex justify-center items-center relative mb-12">
        <Input
          type="text"
          className="border-2 border-gray-500"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></Input>
        <div className="absolute translate-x-[160px]">
          <Button label="追加" backgroundColor="bg-gray-400" textColor="text-[#f9fafb]" onClick={handleClick}></Button>
        </div>
      </div>
      <div className="max-w-[600px] flex flex-col m-auto">
        <div className="flex justify-start mb-2">
          {hasChecked && (
            <Button
              label="一括削除"
              backgroundColor="bg-red-500"
              textColor="text-[#f9fafb]"
              textSize="text-xs"
              onClick={() => {
                handleDeleteAll();
              }}
            />
          )}
        </div>
      </div>
      {todos.length > 0 && (
        <div className="flex justify-center">
          <table>
            <thead>
              <tr className="bg-gray-400">
                <th className="border-r-2 border-b-2 border-l border-t border-black">
                  <Input
                    type="checkbox"
                    className="flex justify-center w-12"
                    isChecked={todos.length > 0 && todos.every((t) => t.checked)}
                    onChange={handleAllCheck}
                  ></Input>
                </th>
                <th className="text-[#f9fafb] font-thin border-r-2 border-b-2 border-t border-black w-32">登録日</th>
                <th className="text-[#f9fafb] font-thin border-r-2 border-b-2 border-t border-black w-72">TODO</th>
                <th className="text-[#f9fafb] font-thin border-b-2 border-t border-r border-black w-24 m-auto">削除</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo) => (
                <tr key={todo.id}>
                  <td className="border-r-2 border-b border-l border-black">
                    <div className="flex justify-center">
                      <Input
                        type="checkbox"
                        className="flex justify-center w-12"
                        isChecked={todo.checked}
                        onChange={() => handleCheck(todo.id)}
                      ></Input>
                    </div>
                  </td>
                  <td className="font-thin border-r-2 border-b border-black">
                    <div className="flex justify-center">{todo.date}</div>
                  </td>
                  <td className="font-thin border-r-2 border-b border-black">
                    <div className="flex justify-center">{todo.content}</div>
                  </td>
                  <td className="border-b border-r border-black">
                    <div className="flex justify-center">
                      <Button
                        label="削除"
                        backgroundColor="bg-white"
                        onClick={() => handleDeleteSelected(todo.id)}
                      ></Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default Practice5;