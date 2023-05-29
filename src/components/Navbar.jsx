import React from 'react'
import { Box,Button,Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  const handleLogout = ()=>{
    localStorage.removeItem("profile");
    navigate("/")
  }
  
  return (
    <Box
    display="flex"
    flexDir="column"
    justifyContent="space-between"
    alignItems="center"
    bg="#068DA9"
    color= "gold"
    w="100%"
    >
      <Text marginTop="0.5%" marginBottom="1.5%" fontSize="1.5rem">Know Weather - Admin Panel</Text>
      <Button marginLeft="50%" marginBottom="0.5%" color="black" onClick={handleLogout}>Logout</Button>
    </Box>
  )
}

export default Navbar