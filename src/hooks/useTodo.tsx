import { useState, useEffect } from 'react';

export type TodoType = {
  readonly id: number;
  createdDate: Date;
  todoText: string;
  selected: boolean;
};

function useTodo(defaultValue: TodoType[]) {
  const [todos, setTodos] = useState<TodoType[]>(defaultValue);
  const [inputValue, setInputValue] = useState<string>('');
  const [hasSelected, setHasSelected] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAdd = () => {
    if (!inputValue) return;
    const newTodo: TodoType = {
      id: new Date().getTime(),
      todoText: inputValue,
      createdDate: new Date(),
      selected: false,
    };
    setTodos((todos) => [...todos, newTodo]);
    setInputValue('');
  };

  const handleAllDelete = () => {
    setTodos((todos) => {
      return todos.filter((todo) => !todo.selected);
    });
  };

  useEffect(() => {
    const isDeleteBtnDisplay = todos.some((todo) => todo.selected);
    setHasSelected(isDeleteBtnDisplay);
  }, [todos]);

  return {
    todos,
    setTodos,
    inputValue,
    setInputValue,
    hasSelected,
    setHasSelected,
    handleInputChange,
    handleAdd,
    handleAllDelete,
  };
}

export default useTodo;
