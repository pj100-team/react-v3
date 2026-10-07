import {useState} from "react";
import Input from "../components/input";
import Button from "../components/button";

function Practice5() {
    type Todo = {
        id: number;
        date: string;
        todo: string;
        check: boolean
    }
    const [input, setInput] = useState<string>("");
    const [todos, setTodos] = useState<Todo[]>([]);
    const checkCount = todos.filter((todo) => 
        todo.check
    ).length;
    const fieldStyle = {
        display: "flex",
        alignItems: "center",
        gap: "12px"
    };
    const inputStyle = {
        height: "30px",
        width: "150px",
        border: "1px solid #94a3b8",
        borderRadius: "4px",
        padding: "0 8px"
    };
    const buttonStyle = {
        borderColor: "#94A3B8",
        backgroundColor: "#94A3B8",
        color: "#ffffff",
        width: "60px",
        height: "30px",
        borderRadius: "4px"
    };
    const addTodo = () => {
        const today = new Date().toLocaleDateString("ja-JP", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit"
        });
        const newTodo: Todo = {
            id: Date.now(),
            date: today,
            todo: input,
            check: false
        }
        setTodos([...todos, newTodo])
        setInput("");
    }
    const deleteTodo = (id: number) => {
        const newTodos = todos.filter((todo) => 
            todo.id !== id
        );
        setTodos(newTodos);
    };
    const checkAll = (checked : boolean) => {
        const newTodos = todos.map((todo) => ({
            ...todo,
            check: checked
        }));
        setTodos(newTodos);
    };
    const checkTodo = (id: number, checked: boolean) => {
        const newTodos = todos.map((todo) => 
            todo.id === id ? {...todo, check: checked} :todo
        );
        setTodos(newTodos);
    }
    const deleteAll = () => {
        const newTodos = todos.filter((todo) => todo.check === false);
        setTodos(newTodos);
    }

    return(
        <div
            style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                gap: "10px",
                marginTop: "40px"
            }}
        >
            <span>TO DO List</span>
            <div
                style = {fieldStyle}
            >
                <Input
                    type = "text"
                    style = {inputStyle}
                    onChange = {(e) => setInput(e.target.value)}
                    value = {input}
                />
                <Button
                    name = "追加"
                    style = {buttonStyle}
                    onClick = {addTodo}
                />
            </div>
            {checkCount !== 0 && (
                <Button
                name = "一括削除"
                style = {buttonStyle}
                onClick = {deleteAll}
                />
            )}
            {todos.length !== 0 && <table>
                <thead>
                    <tr>
                        <th>
                            <input 
                                type = "checkbox"
                                checked={todos.length > 0 && todos.every((todo) => todo.check)}
                                onChange = {(e) => checkAll(e.target.checked)}
                             />
                        </th>
                        <th>登録日</th>
                        <th>TODO</th>
                        <th>削除</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo) => (
                        <tr key = {todo.id}>
                            <td>
                                <input 
                                    type = "checkbox"
                                    checked = {todo.check}
                                    onChange = {(e) =>
                                        checkTodo(todo.id, e.target.checked)
                                    }
                                 />
                            </td>
                            <td>
                                {todo.date}
                            </td>
                            <td>
                                {todo.todo}
                            </td>
                            <td>
                                <Button
                                    name = "削除"
                                    style = {buttonStyle}
                                    onClick = {() => deleteTodo(todo.id)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>}
        </div>
    )
}

export default Practice5;