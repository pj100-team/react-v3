import React, { useState } from 'react';

interface Todo {
  id: number;
  text: string;
  date: string;
  isChecked: boolean;
}

const Practice5: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [selectAll, setSelectAll] = useState<boolean>(false);

  const handleAddTodo = () => {
    if (inputValue.trim() === '') return;
    const newTodo: Todo = {
      id: Date.now(),
      text: inputValue,
      date: new Date().toLocaleDateString(),
      isChecked: false,
    };
    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setTodos(todos.map(todo => ({ ...todo, isChecked: newSelectAll })));
  };

  const handleCheckboxChange = (id: number) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo));
  };

  const handleDeleteSelected = () => {
    setTodos(todos.filter(todo => !todo.isChecked));
    setSelectAll(false);
  };

  return (
    <div>
      <h2 className="text-center text-2xl mb-5">TODOList</h2>
      <div className="flex justify-center mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="px-3 py-2 border rounded-md border-gray-300 mr-2 text-sm"
        />
        <button
          onClick={handleAddTodo}
          className="px-3 py-2 bg-gray-500 text-white rounded-md text-sm cursor-pointer"
        >
          追加
        </button>
      </div>

      <div className="mb-4">
        {todos.length > 0 ? (
          <table className="w-full table-auto border-collapse text-center text-xs border border-gray-300">
            <thead>
              <tr>
                <th className="border-b-2 border-gray-300 py-2 px-4 relative bg-gray-100">
                  <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAll}
                    className="w-4 h-4"
                  />
                  {todos.some(todo => todo.isChecked) && (
                    <button
                      onClick={handleDeleteSelected}
                      className="absolute top-[-25px] left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs bg-red-500 text-white rounded-md cursor-pointer"
                    >
                      一括削除
                    </button>
                  )}
                </th>
                <th className="border-b-2 border-gray-300 py-2 px-4 bg-gray-100">登録日</th>
                <th className="border-b-2 border-gray-300 py-2 px-4 bg-gray-100">内容</th>
                <th className="border-b-2 border-gray-300 py-2 px-4 bg-gray-100">操作</th>
              </tr>
            </thead>
            <tbody>
              {todos.map(todo => (
                <tr key={todo.id}>
                  <td className="border-b border-r py-2 px-4">
                    <input
                      type="checkbox"
                      checked={todo.isChecked}
                      onChange={() => handleCheckboxChange(todo.id)}
                      className="w-4 h-4"
                    />
                  </td>
                  <td className="border-b border-r py-2 px-4">{todo.date}</td>
                  <td className="border-b border-r py-2 px-4">{todo.text}</td>
                  <td className="border-b py-2 px-4">
                    <button
                      onClick={() => handleDeleteTodo(todo.id)}
                      className="px-2 py-1 bg-gray-500 text-white rounded-md text-xs cursor-pointer"
                    >
                      削除
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
      </div>
    </div>
  );
};

export default Practice5;
