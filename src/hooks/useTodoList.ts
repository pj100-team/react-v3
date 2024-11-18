import { useState } from 'react';

interface Todo {
  id: number;
  text: string;
  date: string;
  isChecked: boolean;
}

export const useTodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const selectAll = todos.length > 0 && todos.every(todo => todo.isChecked);

  const addTodo = (text: string) => {
    const trimmedText = text.trim();
    if (trimmedText === '') return;

    const newTodo: Todo = {
      id: Date.now(),
      text: trimmedText,
      date: new Date().toLocaleDateString(),
      isChecked: false,
    };
    setTodos(prevTodos => [...prevTodos, newTodo]);
  };

  const deleteTodo = (id: number) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const toggleSelectAll = () => {
    const newSelectAllState = !selectAll;
    setTodos(prevTodos => prevTodos.map(todo => ({ ...todo, isChecked: newSelectAllState })));
  };

  const toggleTodoCheck = (id: number) => {
    setTodos(prevTodos =>
      prevTodos.map(todo => (todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo))
    );
  };

  const deleteSelectedTodos = () => {
    setTodos(prevTodos => prevTodos.filter(todo => !todo.isChecked));
  };

  return { 
    todos, 
    selectAll, 
    addTodo, 
    deleteTodo, 
    toggleSelectAll, 
    toggleTodoCheck, 
    deleteSelectedTodos 
  };
};
