import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import React from 'react'

const TotalTask = () => {
  return (
    <Box>
      <Grid templateColumns="repeat(3, 1fr)" gap="6" alignItems={"center"}>
      <GridItem colSpan={2}>
         <Text textStyle="sm">Task Done</Text>
          <Text textStyle="sm">keep it up!</Text>
      </GridItem>
      <GridItem colSpan={1}>
       <Box display={"flex"} alignItems={"center"} justifyContent={"center"} bg={"#f234de"} w={"100px"} h={"100px"} borderRadius={"full"}>
        <Text textStyle={"xs"}>{2}</Text> /  <Text textStyle={"xs"}>{3}</Text> 
       </Box>
      </GridItem>
      
    </Grid>
    </Box>
  )
}

export default TotalTask
