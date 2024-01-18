import { useState, useEffect } from 'react';
import AddTodo from '../components/addTodo';
import AllDeleteTodo from '../components/allDeleteTodo';
import TodoList from '../components/todoList';

export type Todo = {
  readonly id: number;
  createdDate: Date;
  todoText: string;
  selected: boolean;
};

const Practice5 = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [hasSelected, setHasSelected] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAdd = () => {
    if (!inputValue) return;
    const newTodo: Todo = {
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
    const isDeleteBtnDisplay = todos.some((todo) => todo.selected === true);
    setHasSelected(isDeleteBtnDisplay);
  });

  return (
    <>
      <h4 className="text-center text-[2rem] mb-8">TODOlist</h4>
      <AddTodo clickHandler={handleAdd} changeHandler={handleChange} todoText={inputValue} />
      <div className="mt-[50px] mb-[20px]">
        <AllDeleteTodo hasSelectedState={hasSelected} clickHandler={handleAllDelete} />
      </div>
      {todos.length > 0 && (
        <TodoList todos={todos} setTodos={setTodos} setHasSelected={setHasSelected} hasSelected={hasSelected} />
      )}
    </>
  );
};

export default Practice5;
