import { FormEvent, useState, useEffect } from 'react';
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
  const [hasSelected, setHasSelected] = useState<boolean>(false);
  // const taskText = useRef<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const addTodoItem = () => {
    if (!inputValue) return;
    const newTodo: Todo = {
      id: new Date().getTime(),
      todoText: inputValue,
      createdDate: new Date(),
      selected: false,
    };
    setTodos((todos) => [newTodo, ...todos]);
    setInputValue('');
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
  };

  const handleDelete = (targetID: number) => {
    // const deleteId = e.currentTarget.id;
    setTodos((todos) => {
      const newTodos = todos.filter((todo) => {
        if (todo.id !== targetID) {
          return { ...todo };
        }
      });
      return newTodos;
    });
  };

  const handleAllDelete = () => {
    setTodos((todos) => {
      return todos.filter((todo) => {
        if (!todo.selected) return todo;
      });
    });
  };

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

  useEffect(() => {
    const isDeleteBtnDisplay = todos.some((todo) => todo.selected === true);
    setHasSelected(isDeleteBtnDisplay);
  });

  return (
    <>
      <h4 className="font-bold text-center text-sm">TODOlist</h4>
      <AddTodo clickHandler={addTodoItem} changeHandler={handleChange} todoText={inputValue} />
      <button className={hasSelected ? '' : 'opacity-0 invisible'} onClick={handleAllDelete}>
        一括削除
      </button>
      {todos.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  name="select_all"
                  id="select_all"
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
                <tr key={todo.id}>
                  <td>
                    <input
                      type="checkbox"
                      name="selectFlg"
                      checked={todo.selected}
                      onChange={() => handleCheck(todo.id)}
                    />
                  </td>
                  <td>{todo.createdDate.toLocaleDateString()}</td>
                  <td>{todo.todoText}</td>
                  <td>
                    <input type="button" name="deleteFlg" value="削除" onClick={() => handleDelete(todo.id)} />
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
