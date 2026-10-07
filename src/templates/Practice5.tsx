import {useState} from "react";
import Input from "../components/Input";
import Button from "../components/Button";

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
        height: "34px",
        width: "150px",
        border: "1px solid #94a3b8",
        borderRadius: "2px",
        padding: "0 8px"
    };
    const buttonStyle = {
        borderColor: "#94A3B8",
        backgroundColor: "#94A3B8",
        color: "#ffffff",
        width: "60px",
        height: "40px",
        borderRadius: "4px"
    };
    const tableStyle = {
        borderCollapse: "collapse" as const,
        width: "520px",
        textAlign: "center" as const
    };
    const thStyle = {
        border: "1px solid #333333",
        backgroundColor: "#94A3B8",
        color: "#ffffff",
        height: "36px"
    };
    const tdStyle = {
        border: "1px solid #333333",
        height: "36px"
    };
    const extraDeleteButtonStyle = {
        borderColor: "#dc2626",
        backgroundColor: "#dc2626",
        color: "#ffffff",
        width: "75px",
        height: "20px",
        borderRadius: "2px"
    };
    const deleteButtonStyle = {
        borderColor: "transparent",
        backgroundColor: "transparent",
        color: "#000000",
        width: "60px",
        height: "30px",
        borderRadius: "0px"
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
            <span
                style = {{
                    fontSize: "26px",
                }}
            >
                TODOList
            </span>
            <form
                style={fieldStyle}
                onSubmit={(e) => {
                    e.preventDefault();
                    addTodo();
                }}
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
            </form>
            <div
                style={{
                    visibility: checkCount !== 0 ? "visible" : "hidden",
                    width: "520px",
                    display: "flex",
                    justifyContent: "flex-start"
                }}
            >
                <Button
                name = "一括削除"
                style = {extraDeleteButtonStyle}
                onClick = {deleteAll}
                />
            </div>
            {todos.length !== 0 && 
            <table
                style={tableStyle}
            >
                <thead>
                    <tr>
                        <th
                            style = {{...thStyle, width: "50px"}}
                        >
                            <Input 
                                type = "checkbox"
                                checked={todos.length > 0 && todos.every((todo) => todo.check)}
                                onChange = {(e) => checkAll(e.target.checked)}
                             />
                        </th>
                        <th
                            style = {{...thStyle, width: "120px"}}
                        >
                            登録日
                        </th>
                        <th
                            style = {{...thStyle, width: "250px"}}
                        >
                            TODO
                        </th>
                        <th
                            style = {{...thStyle, width: "100px"}}
                        >
                            削除
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo) => (
                        <tr key = {todo.id}>
                            <td
                                style = {tdStyle}
                            >
                                <Input 
                                    type = "checkbox"
                                    checked = {todo.check}
                                    onChange = {(e) =>
                                        checkTodo(todo.id, e.target.checked)
                                    }
                                 />
                            </td>
                            <td
                                style = {tdStyle}
                            >
                                {todo.date}
                            </td>
                            <td
                                style = {tdStyle}
                            >
                                {todo.todo}
                            </td>
                            <td
                                style = {tdStyle}
                            >
                                <Button
                                    name = "削除"
                                    style = {deleteButtonStyle}
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