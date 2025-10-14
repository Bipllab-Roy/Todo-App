import { Button, Checkbox, Flex, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import { FaUserEdit } from 'react-icons/fa'
import { MdDeleteForever } from 'react-icons/md'

const TodoList = () => {
  return (
   <Grid templateColumns="repeat(12, 1fr)" gap="6">
      <GridItem colSpan={1}>
         <Checkbox.Root checked={true}>
      <Checkbox.HiddenInput />
      <Checkbox.Control />
     
    </Checkbox.Root>
      </GridItem>
      <GridItem colSpan={9}>
        
      </GridItem>
      <GridItem colSpan={2} >
        <Flex gap={"5px"} justify={"end"}>
            <Button size={"xs"}><FaUserEdit /></Button>
            <Button size={"xs"} ><MdDeleteForever /></Button>
        </Flex>
      </GridItem>
    </Grid>
  )
}

export default TodoList
