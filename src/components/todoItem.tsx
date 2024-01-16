import type { Todo } from '../templates/practice5';

interface Props extends Todo {
  selectHandler: () => void;
  deleteHandler: () => void;
}

const TodoItem: React.FC<Props> = ({ id, createdDate, todoText, selected, selectHandler, deleteHandler }) => {
  return (
    <tr key={id}>
      <td className="">
        <input type="checkbox" name="selectFlg" checked={selected} onChange={selectHandler} />
      </td>
      <td>{createdDate.toLocaleDateString()}</td>
      <td>{todoText}</td>
      <td>
        <input
          type="button"
          name="deleteFlg"
          value="削除"
          onClick={deleteHandler}
          className="pointer-events-auto transition hover:opacity-50"
        />
      </td>
    </tr>
  );
};

export default TodoItem;
