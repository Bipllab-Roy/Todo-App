import useTodo from "@/hooks/useTodo";
import { Button, Group, Input } from "@chakra-ui/react";
import { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

const CreateTodo = () => {
  const { createTodo, todo } = useTodo();
  const [newTodo, setNewTodo] = useState({
    text: "",
    isEdit: false,
    isComplete: false,
  });

  console.log(todo);
  const handleAddTodo = () => {
    createTodo(newTodo);
    setNewTodo({ ...newTodo, text: "" });
  };
  return (
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
  );
};

export default CreateTodo;
