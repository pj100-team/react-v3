import type { TodoType } from './useTodo';

type Props = {
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
};

const useTodoDelete = ({ setTodos }: Props) => {
  const handleDelete = (targetID: number) => {
    setTodos((todos) => {
      const newTodos = todos.filter((todo) => {
        return todo.id !== targetID;
      });
      return newTodos;
    });
  };
  const handleAllDelete = () => {
    setTodos((todos) => {
      return todos.filter((todo) => !todo.selected);
    });
  };

  return {
    handleDelete,
    handleAllDelete,
  };
};

export default useTodoDelete;
