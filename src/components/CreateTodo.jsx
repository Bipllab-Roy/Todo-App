import useTodo from "@/hooks/useTodo";
import { Box, Button, Group, Input } from "@chakra-ui/react";
import { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

const CreateTodo = () => {
  const { createTodo, todo } = useTodo();
  const [message, setMessage] = useState("");
  const [newTodo, setNewTodo] = useState({
    text: "",
    isEdit: false,
    isComplete: false,
  });

  console.log(todo);
  const handleAddTodo = () => {
   if (newTodo.text.trim() !=="" && newTodo.text.length >2) {
    createTodo(newTodo);
    setNewTodo({ ...newTodo, text: "" });
    setMessage(""); 
  }  
   

    else if (newTodo.text.trim() ==="") {
      setMessage("Task cannot be empty.");
    }

    else if (newTodo.text.length <= 2) {
      setMessage("Task must be longer than 2 characters.")}

      else {
        setMessage("Task cannot be empty.");
      }
  };


  return (
    <>
    <Group attached w="full" maxW="full" bg={"white"}>
      <Input
        onChange={(e) =>
          setNewTodo({ ...newTodo, id: todo?.length + 1, text: e.target.value })
        }
        flex="1"
        placeholder="Add new task"
        value={newTodo.text}
      />
      <Button onClick={handleAddTodo}  bg="bg.subtle" variant="outline">
       <IoIosAddCircleOutline />
      </Button>
    </Group>
   { message && <Box color={"red.500"} marginTop={2}>{message}</Box>}
    </>
  );
};

export default CreateTodo;
