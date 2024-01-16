import type { PropsTodo } from '../templates/practice5';
type Props = {
  addTodoItem: () => {};
  taskText: string;
};

const AddTodo: React.FC<any> = ({ clickHandler, changeHandler, todoText }) => {
  return (
    <div>
      <input
        type="text"
        name="addItem"
        id="addItem"
        className="p-form__input"
        value={todoText}
        onChange={changeHandler}
      />
      <button type="button" onClick={clickHandler}>
        追加
      </button>
    </div>
  );
};

export default AddTodo;
