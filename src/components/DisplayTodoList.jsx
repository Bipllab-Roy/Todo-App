import useTodo from '@/hooks/useTodo';
import React from 'react'
import TodoList from './TodoList';
import { Flex } from '@chakra-ui/react';

const DisplayTodoList = () => {
  
  const {  todo } = useTodo();
  return (
    <Flex flexDirection={"column"} gap={"2"}>
      {todo?.map((t)=> <TodoList key={t.id||0} todo={t}/>)}
    </Flex>
  )
}

export default DisplayTodoList
