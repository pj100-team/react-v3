import React, { useState } from 'react';


interface Task {
  id: number;
  todayDate: string;
  taskName: string;
  isChecked: boolean;
}

const Practice5: React.FC = () => {
  const [todos, setTodos] = useState<Task[]>([]);
  const [task, setTask] = useState<string>('');
  const [isAllSelected, setIsAllSelected] = useState<boolean>(false);

  const selectAll = () => {
    setIsAllSelected(prevIsAllSelected => {
      const newState = !prevIsAllSelected;
      setTodos(todos => todos.map(todo => ({ ...todo, isChecked: newState })));
      return newState;
    });
  };
  
  const addTask = () => {
    if (task.trim() === '') return;
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    let day = currentDate.getDate();
    const newTodo: Task = {
      id: Date.now(),
      todayDate: `${year}/${month}/${day}`,
      taskName: task,
      isChecked: false,
    };
    setTodos([...todos, newTodo]);
    setTask('');
  };

  const deleteTask = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  

  const toggleCheckbox = (id: number) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo));
  };

  const deleteSelected = () => {
    setTodos(todos.filter(todo => !todo.isChecked));
    setIsAllSelected(false);
  };

  return (
    <div className="m-auto flex flex-col gap-4...">
      <h2 className="text-4xl text-center mt-4 mb-4">TODOList</h2>
      <div className="m-auto flex flex-row mb-12 gap-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500"
        />
        <button
          onClick={addTask}
          className=' bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'
        >
          追加
        </button>
      </div>


      <div className="mb-4">
        {todos.length > 0 ? (
          <table className="w-full table-auto border-collapse mt-8 text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xl border-b-2 border-gray-300 py-2 px-4 bg-gray-100">
              <tr>
                <th className="relative text-xl font-bold text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <input
                    type="checkbox"
                    checked={isAllSelected}
                    onChange={selectAll}
                  />
                  {todos.some(todo => todo.isChecked) && (
                    <button
                      onClick={deleteSelected}
                      className="absolute top-[-50px] px-2 py-1 w-16 h-8 text-xs bg-red-500 text-white rounded-md"
                    >
                      一括削除
                    </button>
                  )}
                </th>
                <th>登録日</th>
                <th>内容</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              {todos.map(todo => (
                <tr key={todo.id} className="border-b border-r py-2 px-4">
                  <td className="border-b border-r py-2 px-4">
                    <input
                      type="checkbox"
                      checked={todo.isChecked}
                      onChange={() => toggleCheckbox(todo.id)}
                    />
                  </td>
                  <td className="border-b border-r py-2 px-4">{todo.todayDate}</td>
                  <td className="border-b border-r py-2 px-4">{todo.taskName}</td>
                  <td className="border-b py-2 px-4">
                    <button
                      onClick={() => deleteTask(todo.id)}
                      className="px-2 py-1 bg-gray-500 text-white rounded-md text-xs"
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