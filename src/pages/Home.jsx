import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";
import { Box, Button, Image,Text } from '@chakra-ui/react';
import home from "../assests/home.png";
// import { useSelector } from 'react-redux';

const Home = () => {

const navigate = useNavigate();
// const {admin} = useSelector((state)=>({...state.admin}))
// console.log(JSON.parse(localStorage.getItem("profile")))

  return (
    <Box display="flex" flexDir="column" w="100%" textAlign="center">
    <Navbar/>
    <Text fontSize="2rem" as='b'>Welcome, {JSON.parse(localStorage.getItem("profile")).result.name}</Text>
    <Box display="flex">
      <Box display="flex" w="50%" padding="10px 10px 10px 10px" marginTop="1%" h="25rem"><Image src={home} alt="project-image" height="100%" borderRadius="50px"/></Box>
      <Box display="flex" flexDir="column" w="50%" textAlign="center">
        <Box margin="auto auto auto auto"><Button colorScheme='teal' size='lg' onClick={()=>{navigate("/users")}}>Manage Users</Button></Box>
        <Box margin="auto auto auto auto"><Button colorScheme='teal' size='lg' onClick={()=>{navigate("/settings")}}>Settings</Button></Box>
      </Box>
    </Box>
    </Box>
  )
}

export default Home;