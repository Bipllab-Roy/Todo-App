import useTodo from "@/hooks/useTodo";
import {
  Button,
  Checkbox,
  Flex,
  Grid,
  GridItem,
  Input,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";

const TodoList = ({ todo }) => {
  const { deleteTodo, completeTodo, editTodo, updateTodo } = useTodo();
  const [editMode, setEditMode] = useState(todo.text || "");

  const handleComplete = () => {
    completeTodo(todo.id);
  };

  const handleEdit = () => {
    editTodo(todo.id);
  };
  const handleUpdate = () => {
    updateTodo(todo.id, editMode);
  };

  return (
    <Grid templateColumns="repeat(12, 1fr)" gap="6">
      <GridItem colSpan={1}>
        <Checkbox.Root checked={todo.isComplete} onChange={handleComplete}>
          <Checkbox.HiddenInput />
          <Checkbox.Control />
        </Checkbox.Root>
      </GridItem>
      <GridItem colSpan={9}>
        {todo.isEdit ? (
          <Input
            type="text"
            value={editMode}
            onChange={(e) => setEditMode(e.target.value)}
          />
        ) : (
          <Text>{todo.isComplete ? <del>{todo.text}</del> : todo.text}</Text>
        )}
      </GridItem>
      <GridItem colSpan={2}>
        <Flex gap={"5px"} justify={"end"}>
          {todo.isEdit ? (
            <Button size={"xs"} onClick={handleUpdate}>
              <RxUpdate />
            </Button>
          ) : (
            <Button size={"xs"} onClick={handleEdit}>
              <FaRegEdit />
            </Button>
          )}

          <Button size={"xs"} onClick={() => deleteTodo(todo.id)}>
            <MdDeleteForever />
          </Button>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default TodoList;
