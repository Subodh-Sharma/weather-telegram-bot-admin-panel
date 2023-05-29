import React from 'react'
import { Box,Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box
    display="flex"
    flexDir="column"
    justifyContent="space-between"
    alignItems="center"
    bg="#068DA9"
    color= "gold"
    w="100%"
    h="10%"
    >
      <Text marginTop="0.5%" marginBottom="3.5%" fontSize="1.5rem">Know Weather - Admin Panel</Text>
    </Box>
  )
}

export default Navbar