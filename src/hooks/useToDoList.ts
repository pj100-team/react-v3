import { useState } from 'react';


export interface Data {
  id: number;
  todayDate: string;
  taskName: string;
  isChecked: boolean;
}

export const useToDoList = () => {
    const [todos, setTodos] = useState<Data[]>([]);
    const [isAllSelected, setIsAllSelected] = useState<boolean>(false);
    const [task, setTask] = useState<string>('');

    const addTask = () => {
        if (task.trim() === '') return;
        let currentDate = new Date();
        let year = currentDate.getFullYear();
        let month = currentDate.getMonth() + 1;
        let day = currentDate.getDate();
        const newTodo: Data = {
          id: Date.now(),
          todayDate: `${year}/${month}/${day}`,
          taskName: task,
          isChecked: false,
        };
        setTodos([...todos, newTodo]);
        setTask('');
      };

      const deleteTask = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
      };
    
      
    
      const toggleCheckbox = (id: number) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo));
      };
    
      const deleteSelected = () => {
        setTodos(todos.filter(todo => !todo.isChecked));
        setIsAllSelected(false);
      };

      const selectAll = () => {
        setIsAllSelected(prevIsAllSelected => {
          const newState = !prevIsAllSelected;
          setTodos(todos => todos.map(todo => ({ ...todo, isChecked: newState })));
          return newState;
        });
      };

      return {
        todos,isAllSelected,task,setTask,addTask,deleteTask,selectAll,toggleCheckbox,deleteSelected,
      };
}