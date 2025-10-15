// import { TodoContext } from '@/context/TodoContext'
// import { AbsoluteCenter, Box, Flex, For, Grid, GridItem, HStack, ProgressCircle, Text } from '@chakra-ui/react'
// import React, { useContext } from 'react'

// const TotalTask = () => {
//   const{todo}=useContext(TodoContext)
//   const completeTodo = todo.filter((t)=> t.isComplete)
//   return (
//     <Box >
//       <Grid templateColumns="repeat(3, 1fr)" gap="6" alignItems={"center"}>
//       <GridItem paddingLeft={"20"} textStyle={"xl"} colSpan={2}>
//          <Text color={"blackAlpha.800"} textStyle="xl">Task Done</Text>
//           <Text color={"blackAlpha.900"} textStyle="xl">keep it up!</Text>

//          <HStack gap="">
//       <For each={["lg"]}>
//         {(size) => (
//           <ProgressCircle.Root size={size} key={size} value={5}>
//             <ProgressCircle.Circle>
//               <ProgressCircle.Track />
//               <ProgressCircle.Range />
//             </ProgressCircle.Circle>
//             <AbsoluteCenter>
//               <ProgressCircle.ValueText />
//             </AbsoluteCenter>
//           </ProgressCircle.Root>
//         )}
//       </For>
//     </HStack>

//       </GridItem>
//       <GridItem colSpan={1}>
//        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}  bg={"green.300"} w={"100px"} h={"100px"} borderRadius={"full"}>
//         <Text textStyle={"xs"}>{completeTodo?.length ||0}</Text> /  <Text textStyle={"xs"}>{todo?.length || 0}</Text> 
//        </Box>
//       </GridItem>
      
//     </Grid>
//     </Box>
//   )
// }

// export default TotalTask







import { TodoContext } from "@/context/TodoContext";
import {
  AbsoluteCenter,
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  ProgressCircle,
  Text,
} from "@chakra-ui/react";
import React, { useContext } from "react";

const TotalTask = () => {
  const { todo } = useContext(TodoContext);

  // Calculate completed and total tasks
  const completed = todo.filter((t) => t.isComplete);
  const total = todo.length;
  const completedCount = completed.length;

  // Calculate dynamic progress percentage
  const progressValue = total === 0 ? 0 : Math.round((completedCount / total) * 100);

  return (
    <Box bg="white" p="6" rounded="xl" shadow="md">
      <Grid templateColumns="2fr 1fr" alignItems="center">
        {/* Left Side: Text + Progress */}
        <GridItem>
          <Text fontSize="2xl" fontWeight="bold" color="gray.700">
           Task Done
          </Text>
          <Text fontSize="xl" fontWeight={"bold"} color="gray.500" mb="4">
            Keep it up! 
          </Text>

          <HStack>
            <ProgressCircle.Root
              size="lg"
              value={progressValue} // ✅ Dynamic value
              thickness="12px"
              colorScheme="green"
            >
              <ProgressCircle.Circle>
                <ProgressCircle.Track />
                <ProgressCircle.Range />
              </ProgressCircle.Circle>
              <AbsoluteCenter>
                <Text fontSize="md" fontWeight="semibold">
                  {progressValue}%
                </Text>
              </AbsoluteCenter>
            </ProgressCircle.Root>
          </HStack>
        </GridItem>

        {/* Right Side: Count Circle */}
        <GridItem>
          <Flex
            align="center"
            justify="center"
            bg="green.400"
            color="white"
            rounded="full"
            w="100px"
            h="100px"
            flexDir="column"
            shadow="lg"
          >
            <Text fontSize="3xl" fontWeight="bold">
              {completedCount}
            </Text>
            <Text fontSize="sm">of {total}</Text>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default TotalTask;


