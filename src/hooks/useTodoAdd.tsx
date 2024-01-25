import type { TodoType } from './useTodo';
type Props = {
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
};

const useTodoAdd = ({ setTodos, inputValue, setInputValue }: Props) => {
  const handleAdd = () => {
    if (!inputValue) return;
    const newTodo: TodoType = {
      id: new Date().getTime(),
      todoText: inputValue,
      createdDate: new Date(),
      selected: false,
    };
    setTodos((todos) => [...todos, newTodo]);
    setInputValue('');
  };

  return {
    handleAdd,
  };
};

export default useTodoAdd;
