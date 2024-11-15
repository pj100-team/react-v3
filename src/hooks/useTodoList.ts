import { useState } from 'react';

interface Todo {
  id: number;
  text: string;
  date: string;
  isChecked: boolean;
}

export const useTodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [selectAll, setSelectAll] = useState<boolean>(false);

  const addTodo = (text: string) => {
    if (text.trim() === '') return;
    const newTodo: Todo = {
      id: Date.now(),
      text,
      date: new Date().toLocaleDateString(),
      isChecked: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setTodos(todos.map(todo => ({ ...todo, isChecked: newSelectAll })));
  };

  const toggleTodoCheck = (id: number) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo)));
  };

  const deleteSelectedTodos = () => {
    setTodos(todos.filter(todo => !todo.isChecked));
    setSelectAll(false);
  };

  return { todos, selectAll, addTodo, deleteTodo, toggleSelectAll, toggleTodoCheck, deleteSelectedTodos };
};
