import { Button, Group, Input } from '@chakra-ui/react'


const CreateTodo = () => {
  return (
    <Group attached w="full" maxW="full">
      <Input flex="1" placeholder="Add new task" />
      <Button bg="bg.subtle" variant="outline">
       Add Todo
      </Button>
    </Group>
  )
}

export default CreateTodo
