import React from "react";


import TotalTask from "./components/TotalTask";
import CreateTodo from "./components/CreateTodo";
import DisplayTodoList from "./components/DisplayTodoList";
import { Box, Stack } from "@chakra-ui/react";

const App = () => {
  return (
    <Box maxW={"800px"} marginTop={"20"} marginX={"auto"} bg={"green.100"}  borderRadius={"10px"}>
      <Stack>
       <Box padding={""} marginTop={"30px"}  >
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




