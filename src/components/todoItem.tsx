import type { TodoType } from '../hooks/useTodo';
type Props = {
  todo: TodoType;
  selectHandler: () => void;
  deleteHandler: () => void;
};

const TodoItem: React.FC<Props> = ({ todo, selectHandler, deleteHandler }) => {
  return (
    <tr>
      <td className="border-[#333] border-[1px] border-solid text-center py-[0.5em]">
        <input
          type="checkbox"
          className="cursor-pointer"
          name="selectFlg"
          checked={todo.selected}
          onChange={selectHandler}
        />
      </td>
      <td className="border-[#333] border-[1px] border-solid text-center py-[0.5em]">
        {todo.createdDate.toLocaleDateString()}
      </td>
      <td className="border-[#333] border-[1px] border-solid text-center py-[0.5em]">{todo.todoText}</td>
      <td className="border-[#333] border-[1px] border-solid text-center py-[0.5em]">
        <button onClick={deleteHandler} className="transition hover:opacity-50">
          削除
        </button>
      </td>
    </tr>
  );
};

export default TodoItem;
