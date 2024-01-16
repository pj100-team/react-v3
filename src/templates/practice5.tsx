import { FormEvent, useState, useRef } from 'react';
// import todoItem from '../components/todoItem';
import AddTodo from '../components/addTodo';

export type Todo = {
  readonly id: number;
  createdDate: Date;
  todoText: string;
  selected: boolean;
};

const Practice5 = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [allSelected, setAllSelected] = useState<boolean>(false);
  // const taskText = useRef<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const addTodoItem = () => {
    if (!inputValue) return;
    console.log('STEP1');

    const newTodo: Todo = {
      id: new Date().getTime(),
      todoText: inputValue,
      createdDate: new Date(),
      selected: false,
    };
    setTodos((todos) => [newTodo, ...todos]);

    // setTodos((state) => {
    // const getMaxIdNum = () => {
    //   if (state.length === 0) {
    //     return 0;
    //   }
    //   console.log('STEP2');
    //   return (
    //     Math.max.apply(
    //       null,
    //       state.map((obj) => obj.id),
    //     ) + 1
    //   );
    // };
    // return [...state, { id: getMaxIdNum(), todoText: inputValue, createdDate: new Date(), selected: false }];
    // });
    setInputValue('');
  };
  const handleAllSelect = (isSelected: boolean) => {
    setAllSelected(isSelected);
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
  };

  const deleteTodoItem = (e: FormEvent<HTMLInputElement>) => {
    const deleteId = e.currentTarget.id;
    setTodos((todos) => {
      const newTodos = todos.filter((todo) => {
        if (todo.id.toString() !== deleteId) {
          return { ...todo };
        }
      });
      return newTodos;
    });
  };

  return (
    <>
      <h4 className="font-bold text-center text-sm">TODOlist</h4>
      <AddTodo clickHandler={addTodoItem} changeHandler={handleChange} todoText={inputValue} />
      {todos.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  name="select_all"
                  id="select_all"
                  onChange={() => handleAllSelect(!allSelected)}
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
                <tr key={todo.id}>
                  <td>
                    <input type="checkbox" name="selectFlg" checked={todo.selected} />
                  </td>
                  <td>{todo.createdDate.toLocaleDateString()}</td>
                  <td>{todo.todoText}</td>
                  <td>
                    <input type="button" name="deleteFlg" value="削除" onClick={deleteTodoItem} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Practice5;
