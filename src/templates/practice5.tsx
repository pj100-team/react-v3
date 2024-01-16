import { useState, useEffect } from 'react';
import AddTodo from '../components/addTodo';
import AllDeleteTodo from '../components/allDeleteTodo';
import TodoItem from '../components/todoItem';

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAdd = () => {
    if (!inputValue) return;
    const newTodo: Todo = {
      id: new Date().getTime(),
      todoText: inputValue,
      createdDate: new Date(),
      selected: false,
    };
    setTodos((todos) => [...todos, newTodo]);
    setInputValue('');
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

  const handleAllDelete = () => {
    setTodos((todos) => {
      return todos.filter((todo) => {
        if (!todo.selected) {
          return todo;
        }
        return false;
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
      <AddTodo clickHandler={handleAdd} changeHandler={handleChange} todoText={inputValue} />
      <AllDeleteTodo hasSelectedState={hasSelected} clickHandler={handleAllDelete} />
      {todos.length > 0 && (
        <table className="p-table__border w-full mt-4">
          <thead className="bg-[rgb(149,162,184)] text-white">
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
      )}
    </>
  );
};

export default Practice5;
