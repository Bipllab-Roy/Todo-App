import useTodo from '@/hooks/useTodo'
import { Button, Checkbox, Flex, Grid, GridItem, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { FaUserEdit } from 'react-icons/fa'
import { MdDeleteForever } from 'react-icons/md'
import { RxUpdate } from 'react-icons/rx'

const TodoList = ({todo}) => {
  const{ deleteTodo}=useTodo()
  return (
   <Grid templateColumns="repeat(12, 1fr)" gap="6">
      <GridItem colSpan={1}>
         <Checkbox.Root checked={todo.isComplete}>
      <Checkbox.HiddenInput />
      <Checkbox.Control />
    </Checkbox.Root>
      </GridItem>
      <GridItem border={"2px solid green"} colSpan={9}>
     {
      <Text>{todo.text}</Text>
      // <Input type='text' value={"item 1"}/>
     }
        
      </GridItem>
      <GridItem colSpan={2} >
        <Flex gap={"5px"} justify={"end"}>
            <Button size={"xs"}><FaUserEdit /></Button>
            <Button size={"xs"}><RxUpdate /></Button>
            <Button size={"xs"} onClick={()=>deleteTodo(todo.id)} ><MdDeleteForever /></Button>
        </Flex>
      </GridItem>
    </Grid>
  )
}

export default TodoList
