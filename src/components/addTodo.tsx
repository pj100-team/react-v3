type PropsAddTodo = {
  clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  todoText: string;
};

const AddTodo: React.FC<PropsAddTodo> = ({ clickHandler, changeHandler, todoText }) => {
  return (
    <div className="relative w-fit mx-auto">
      <input
        type="text"
        name="addItem"
        id="addItem"
        className="border-gray-200 border-[1px] rounded-sm px-1"
        value={todoText}
        onChange={changeHandler}
      />
      <button
        type="button"
        onClick={clickHandler}
        className="bg-[#95a2b8] absolute right-[-7em] top-[50%] translate-y-[-50%] rounded-md text-white px-[2em] transition hover:opacity-50"
      >
        追加
      </button>
    </div>
  );
};

export default AddTodo;
