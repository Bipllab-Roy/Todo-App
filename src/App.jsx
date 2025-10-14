import React from "react";

import Demo from "./components/Demo";
import TotalTask from "./components/TotalTask";
import CreateTodo from "./components/CreateTodo";
import DisplayTodoList from "./components/DisplayTodoList";
import TodoList from "./components/TodoList";
import { Box, Stack } from "@chakra-ui/react";

const App = () => {
  return (
    <Box maxW={"800px"} marginX={"auto"} border={"1px solid green"}>
      <Stack>
       <Box padding={"5"} marginTop={"10px"}  border={"1px solid green"}>
         <TotalTask />
       </Box>
       <Box>
         <CreateTodo />
       </Box>
       <Box>
         <DisplayTodoList>
          <TodoList />
        </DisplayTodoList>
       </Box>
      </Stack>
    </Box>
  );
};

export default App;
