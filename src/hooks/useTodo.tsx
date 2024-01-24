import { useState, useEffect } from 'react';

export type TodoType = {
  readonly id: number;
  createdDate: Date;
  todoText: string;
  selected: boolean;
};

function useTodo(defaultValues: TodoType[]) {
  const [todos, setTodos] = useState<TodoType[]>(defaultValues);
  const [hasSelected, setHasSelected] = useState<boolean>(false);

  useEffect(() => {
    const isDeleteBtnDisplay = todos.some((todo) => todo.selected);
    setHasSelected(isDeleteBtnDisplay);
  }, [todos]);

  return {
    todos,
    setTodos,
    hasSelected,
  };
}

export default useTodo;
