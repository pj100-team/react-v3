import {useState} from "react";

type Todo = {
    id: number;
    date: string;
    todo: string;
    check: boolean
}

const useTodoList = () => {
    const [input, setInput] = useState<string>("");
    const [todos, setTodos] = useState<Todo[]>([]);

    const checkCount = todos.filter((todo) => 
        todo.check
    ).length;

    const handleAddTodo = () => {
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
    };
    const handleDeleteTodo = (id: number) => {
        const newTodos = todos.filter((todo) => 
            todo.id !== id
        );
        setTodos(newTodos);
    };
    const handleCheckAll = (checked : boolean) => {
        const newTodos = todos.map((todo) => ({
            ...todo,
            check: checked
        }));
        setTodos(newTodos);
    };
    const handleCheckTodo = (id: number, checked: boolean) => {
        const newTodos = todos.map((todo) => 
            todo.id === id ? {...todo, check: checked} :todo
        );
        setTodos(newTodos);
    };
    const handleDeleteAll = () => {
        const newTodos = todos.filter((todo) => todo.check === false);
        setTodos(newTodos);
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleAddTodo();
    };
    
    return {
        handleSubmit,
        setInput,
        input,
        checkCount,
        handleDeleteAll,
        todos,
        handleCheckAll,
        handleCheckTodo,
        handleDeleteTodo
    }
}

export default useTodoList;