import { useState } from 'react';
import AddTodo from '../components/addTodo';
import AllDeleteTodo from '../components/allDeleteTodo';
import TodoList from '../components/todoList';
import useTodo from '../hooks/useTodo';
import useTodoAdd from '../hooks/useTodoAdd';
import useTodoChange from '../hooks/useTodoChange';
import useTodoSelect from '../hooks/useTodoSelect';
import useTodoDelete from '../hooks/useTodoDelete';

const Practice5 = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const { todos, setTodos, hasSelected } = useTodo([]);
  const { handleAdd } = useTodoAdd({ setTodos, inputValue, setInputValue });
  const { handleInputChange } = useTodoChange({ setInputValue });
  const { handleCheck, handleAllSelect } = useTodoSelect({ setTodos });
  const { handleDelete, handleAllDelete } = useTodoDelete({ setTodos });
  return (
    <>
      <h4 className="text-center text-[2rem] mb-8">TODOlist</h4>
      <AddTodo clickHandler={handleAdd} changeHandler={handleInputChange} todoText={inputValue} />
      <div className="mt-[50px] mb-[20px]">
        <AllDeleteTodo hasSelectedState={hasSelected} clickHandler={handleAllDelete} />
      </div>
      {todos.length > 0 && (
        <TodoList
          todos={todos}
          handleAllSelect={handleAllSelect}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      )}
    </>
  );
};

export default Practice5;
