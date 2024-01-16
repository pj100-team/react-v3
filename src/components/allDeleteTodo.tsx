type PropsAllDeleteTodo = {
  clickHandler: () => void;
  hasSelectedState: any;
};

const AllDeleteTodo: React.FC<PropsAllDeleteTodo> = ({ hasSelectedState, clickHandler }) => {
  return (
    <button className={hasSelectedState ? '' : 'opacity-0 invisible'} onClick={clickHandler}>
      一括削除
    </button>
  );
};

export default AllDeleteTodo;
