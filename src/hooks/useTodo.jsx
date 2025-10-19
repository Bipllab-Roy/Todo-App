import { TodoContext } from "@/context/todoContext";
import { useContext } from "react";

const useTodo =()=> useContext(TodoContext)

export default  useTodo;