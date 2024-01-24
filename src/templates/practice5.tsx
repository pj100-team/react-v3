import AddTodo from '../components/addTodo';
import AllDeleteTodo from '../components/allDeleteTodo';
import TodoList from '../components/todoList';
import useTodo from '../hooks/useTodo';

const Practice5 = () => {
  const { todos, setTodos, inputValue, handleInputChange, handleAdd, hasSelected, handleAllDelete } = useTodo([]);

  return (
    <>
      <h4 className="text-center text-[2rem] mb-8">TODOlist</h4>
      <AddTodo clickHandler={handleAdd} changeHandler={handleInputChange} todoText={inputValue} />
      <div className="mt-[50px] mb-[20px]">
        <AllDeleteTodo hasSelectedState={hasSelected} clickHandler={handleAllDelete} />
      </div>
      {todos.length > 0 && <TodoList todos={todos} setTodos={setTodos} />}
    </>
  );
};

export default Practice5;
