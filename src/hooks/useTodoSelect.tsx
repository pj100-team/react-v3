import type { TodoType } from './useTodo';
type Props = {
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
};

const useTodoSelect = ({ setTodos }: Props) => {
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

  const handleAllSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodos((todos) => {
      return todos.map((todo) => {
        return { ...todo, selected: e.target.checked };
      });
    });
  };

  return {
    handleCheck,
    handleAllSelect,
  };
};

export default useTodoSelect;
