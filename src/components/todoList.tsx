import type { TodoType } from '../hooks/useTodo';
import TodoItem from './todoItem';

type Props = {
  todos: TodoType[];
  handleAllSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCheck: (targetID: number) => void;
  handleDelete: (targetID: number) => void;
};

const TodoList: React.FC<Props> = ({ todos, handleAllSelect, handleCheck, handleDelete }) => {
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
