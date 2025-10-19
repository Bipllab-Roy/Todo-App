import { useEffect, useState } from "react";
import { TodoContext } from "./todoContext";

const TodoProvider = ({ children }) => {
  // const[todo, setTodo]= useState( ()=>{
  //     const localData= localStorage.getItem("todos");
  //     return localData ? JSON.parse(localData) : [];
  // })

  const [todo, setTodo] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);

  const createTodo = (newTodo) => {
    setTodo((prevState) => [...prevState, newTodo]);
    localStorage.setItem("todos", JSON.stringify(todo));
  };

  const deleteTodo = (id) => {
    const updateTodo = todo.filter((t) => t.id !== id);
    setTodo(updateTodo);
  };

  const completeTodo = (id) => {
    const updateTodo = todo.map((t) => {
      if (t.id === id) t.isComplete = !t.isComplete;
      return t;
    });
    setTodo(updateTodo);
  };

  const editTodo = (id) => {
    const updateTodo = todo.map((t) => {
      if (t.id === id) t.isEdit = !t.isEdit;
      return t;
    });
    setTodo(updateTodo);
  };

  const updateTodo = (id, text) => {
    const updateTodo = todo.map((t) => {
      if (t.id === id) {
        t.text = text;
        t.isEdit = false;
      }
      return t;
    });
    setTodo(updateTodo);
  };

  const value = {
    todo,
    createTodo,
    deleteTodo,
    completeTodo,
    editTodo,
    updateTodo,
  };

  return <TodoContext value={value}>{children}</TodoContext>;
};
export default TodoProvider;
