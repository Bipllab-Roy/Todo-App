
import {  createContext} from "react";

export const TodoContext= createContext({
    todo:[],
    createTodo:()=>{},
    updateTodo:()=>{},
    deleteTodo:()=>{},
    completeTodo:()=>{},
    editTodo:()=>{},
   
})
