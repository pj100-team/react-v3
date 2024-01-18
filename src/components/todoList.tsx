import type { Todo } from '../templates/practice5';
import TodoItem from './todoItem';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setHasSelected: React.Dispatch<React.SetStateAction<boolean>>;
  hasSelected: boolean;
}

const TodoList: React.FC<Props> = ({ todos, setTodos, setHasSelected, hasSelected }) => {
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
    <table className="p-table__border w-full">
      <thead className="bg-[rgb(149,162,184)] text-white">
        <tr>
          <th>
            <input
              type="checkbox"
              name="select_all"
              className="cursor-pointer"
              onChange={() => handleAllSelect(!hasSelected)}
            />
          </th>
          <th>登録日</th>
          <th>TODO</th>
          <th>削除</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => {
          return (
            <TodoItem
              id={todo.id}
              createdDate={todo.createdDate}
              todoText={todo.todoText}
              selected={todo.selected}
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
