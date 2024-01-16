type PropsAllDeleteTodo = {
  clickHandler: () => void;
  hasSelectedState: any;
};

const AllDeleteTodo: React.FC<PropsAllDeleteTodo> = ({ hasSelectedState, clickHandler }) => {
  return (
    <button
      className={
        hasSelectedState
          ? 'text-white bg-[#dc2626] px-[0.5em] pointer-events-auto transition hover:opacity-50'
          : 'opacity-0 invisibl'
      }
      onClick={clickHandler}
    >
      一括削除
    </button>
  );
};

export default AllDeleteTodo;
