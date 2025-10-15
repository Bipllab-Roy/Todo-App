import CreateTodo from "@/components/CreateTodo";
import { Children, createContext, useState } from "react";

export const TodoContext= createContext({
    todo:[],
    createTodo:()=>{},
    updateTodo:()=>{},
    deleteTodo:()=>{},
})
const TodoProvider=({children})=>{
    const[todo, setTodo]= useState([])

    const createTodo=(newTodo)=>{
        setTodo((prevState)=>[...prevState,newTodo])
    }
    const deleteTodo=(id)=>{
      const updateTodo = todo.filter((t)=>t.id !==id);
        setTodo(updateTodo)
    }

    const value={
        todo,
        createTodo,
        deleteTodo
    }

    return(
        <TodoContext value={value}>
            {children}
        </TodoContext>
    )
}
export default TodoProvider