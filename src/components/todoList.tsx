import type { Todo } from '../templates/practice5';
import TodoItem from './todoItem';

interface Props {
  items: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setHasSelected: React.Dispatch<React.SetStateAction<boolean>>;
  hasSelected: boolean;
}

const TodoList: React.FC<Props> = ({ items, setTodos, setHasSelected, hasSelected }) => {
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

  const handleAllSelect = (isSelected: boolean) => {
    if (isSelected) {
      setTodos((todos) => {
        return todos.map((todo) => {
          return { ...todo, selected: true };
        });
      });
    } else {
      setTodos((todos) => {
        return todos.map((todo) => {
          return { ...todo, selected: false };
        });
      });
    }
    setHasSelected((prev) => !prev);
  };

  const handleDelete = (targetID: number) => {
    setTodos((todos) => {
      const newTodos = todos.filter((todo) => {
        if (todo.id !== targetID) {
          return { ...todo };
        }
        return false;
      });
      return newTodos;
    });
  };
  return (
    <table className="p-table__border w-full mt-4">
      <thead className="bg-[rgb(149,162,184)] text-white">
        <tr>
          <th>
            <input type="checkbox" name="select_all" id="select_all" onChange={() => handleAllSelect(!hasSelected)} />
          </th>
          <th>登録日</th>
          <th>TODO</th>
          <th>削除</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => {
          return (
            <TodoItem
              id={item.id}
              createdDate={item.createdDate}
              todoText={item.todoText}
              selected={item.selected}
              selectHandler={() => handleCheck(item.id)}
              deleteHandler={() => handleDelete(item.id)}
              key={item.id}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default TodoList;
