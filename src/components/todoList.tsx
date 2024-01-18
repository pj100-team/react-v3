import type { Todo } from '../templates/practice5';
import TodoItem from './todoItem';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setHasSelected: React.Dispatch<React.SetStateAction<boolean>>;
  hasSelected: boolean;
}

const TodoList: React.FC<Props> = ({ todos, setTodos, setHasSelected, hasSelected }) => {
  const handleCheck = (targetID: number) => {
    setTodos((todos) => {
      return todos.map((todo) => {
        if (todo.id === targetID) {
          return { ...todo, selected: !todo.selected };
        }
        return todo;
      });
    });
  };

  const handleAllSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodos((todos) => {
      return todos.map((todo) => {
        return { ...todo, selected: e.target.checked };
      });
    });
    setHasSelected((prev) => !prev);
  };

  const handleDelete = (targetID: number) => {
    setTodos((todos) => {
      const newTodos = todos.filter((todo) => {
        return todo.id !== targetID;
      });
      return newTodos;
    });
  };
  return (
    <table className="w-full">
      <thead className="bg-[rgb(149,162,184)] text-white">
        <tr>
          <th className="border-[#333] border-[1px] border-solid text-center py-[0.5em]">
            <input type="checkbox" name="select_all" className="cursor-pointer" onChange={handleAllSelect} />
          </th>
          <th className="border-[#333] border-[1px] border-solid text-center py-[0.5em]">登録日</th>
          <th className="border-[#333] border-[1px] border-solid text-center py-[0.5em]">TODO</th>
          <th className="border-[#333] border-[1px] border-solid text-center py-[0.5em]">削除</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => {
          return (
            <TodoItem
              todo={todo}
              selectHandler={() => handleCheck(todo.id)}
              deleteHandler={() => handleDelete(todo.id)}
              key={todo.id}
            />
          );
        })}
      </tbody>
    </table>
  );
};
export default TodoList;
