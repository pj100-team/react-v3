import React from 'react';

export type TodoType = {
  id: number;
  content: string;
  date: string;
  checked: boolean;
};

const useTodo = () => {
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

  return {
    inputText,
    setInputText,
    todos,
    handleClick,
    handleAllCheck,
    handleCheck,
    handleDeleteAll,
    handleDeleteSelected,
    hasChecked,
  };
};

export default useTodo;
