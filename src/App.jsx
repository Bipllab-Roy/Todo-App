import React from "react";


import TotalTask from "./components/TotalTask";
import CreateTodo from "./components/CreateTodo";
import DisplayTodoList from "./components/DisplayTodoList";
import { Box, Stack } from "@chakra-ui/react";

const App = () => {
  return (
    <Box maxW={"800px"} marginTop={"20"} marginX={"auto"} bg={"green.100"}  border={"1px solid green"}>
      <Stack>
       <Box padding={""} marginTop={"30px"}  borderBottom={"px solid green"}>
         <TotalTask />
       </Box>
       <Box>
         <CreateTodo />
       </Box>
       <Box>
         <DisplayTodoList/>
         
       
       </Box>
      </Stack>
    </Box>
  );
};

export default App;




