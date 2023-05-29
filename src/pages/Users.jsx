import React,{useEffect} from 'react'
import { Box,TableContainer,Table,Thead,Tr,Th,Tbody,Td, Text, Button, useToast } from '@chakra-ui/react';
import {useDispatch, useSelector} from "react-redux";
import Navbar from '../components/Navbar';
import { getAllUsers,userStatus,deleteUser } from '../redux/features/userSlice';

const Users = () => {
  const {users} = useSelector((state)=>({...state.user}));
  const dispatch = useDispatch();
  const toast = useToast();
  useEffect(()=>{
    dispatch(getAllUsers());
    // eslint-disable-next-line
  },[])

  const handleStatus = (chatId) => {
    dispatch(userStatus({chatId,toast}))
  }
  const handleDelete = (chatId) => {
    dispatch(deleteUser({chatId,toast}))
  }
  return (
    <Box display="flex" flexDir="column" w="100%" textAlign="center">
      <Navbar/>
      <Box display="flex" flexDir="column" w="80%" margin="3rem auto auto auto" textAlign="center" border="2px solid black">
        <Text fontSize="2rem" as='b'>User Info Table</Text>
      <TableContainer>
  <Table variant='striped' colorScheme='blue'>
    <Thead>
      <Tr>
        <Th>Chat Id</Th>
        <Th>User Name</Th>
        <Th>Status</Th>
        <Th>Action</Th>
      </Tr>
    </Thead>
    <Tbody>
      {users.constructor === Array && users.map((item)=>
      <Tr key={item._id}>
        <Td>{item.chatId}</Td>
        <Td>{item.firstName+" "+item.lastName}</Td>
        <Td>{item.status}</Td>
        <Td>
          <Box>
            <Button onClick={()=>handleStatus(item.chatId)}>{item.status==="active" ? "Block":"Active"}</Button>
            <Button onClick={()=>handleDelete(item.chatId)}>Delete</Button>
          </Box>
        </Td>
      </Tr>
      )}
    </Tbody>
  </Table>
</TableContainer>
      </Box>
    </Box>
  )
}

export default Users