import type { Todo } from '../templates/practice5';

interface Props extends Todo {
  selectHandler: () => void;
  deleteHandler: () => void;
}

const TodoItem: React.FC<Props> = ({ id, createdDate, todoText, selected, selectHandler, deleteHandler }) => {
  return (
    <tr>
      <td>
        <input
          type="checkbox"
          className="cursor-pointer"
          name="selectFlg"
          checked={selected}
          onChange={selectHandler}
        />
      </td>
      <td>{createdDate.toLocaleDateString()}</td>
      <td>{todoText}</td>
      <td>
        <button onClick={deleteHandler} className="transition hover:opacity-50">
          削除
        </button>
      </td>
    </tr>
  );
};

export default TodoItem;
