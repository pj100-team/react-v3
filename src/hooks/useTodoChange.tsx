type Props = {
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
};

const useTodoChange = ({ setInputValue }: Props) => {
  // const { setInputValue } = useTodo(defaultValues);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return {
    handleInputChange,
  };
};

export default useTodoChange;
