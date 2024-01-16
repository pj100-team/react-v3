import { FormEvent } from 'react';
type PropsAddTodo = {
  clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  todoText: string;
};

const AddTodo: React.FC<PropsAddTodo> = ({ clickHandler, changeHandler, todoText }) => {
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
