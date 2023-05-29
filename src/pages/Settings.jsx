import React, { useState } from 'react';
import { Box,Text,TableContainer,Table,Thead,Tr,Th,Tbody,Td,Button,Input } from '@chakra-ui/react';
import Navbar from '../components/Navbar';

const Settings = () => {
  const [showNameInput,setShowNameInput] = useState(false);
  const [showDiscriptionInput,setShowDiscriptionInput] = useState(false);
  const [showTokenInput,setShowTokenInput] = useState(false);
  const [showWeatherAPIInput,setShowWeatherAPIInput] = useState(false);

  const handleName = ()=>{
    setShowNameInput(true);
  }
  const handleDiscription = ()=>{
    setShowDiscriptionInput(true);
  }
  const handleToken = ()=>{
    setShowTokenInput(true);
  }
  const handleWeatherAPI = ()=>{
    setShowWeatherAPIInput(true);
  }
  const updateName = ()=>{
    setShowNameInput(false);
  }
  const updateDiscription = ()=>{
    setShowDiscriptionInput(false);
  }
  const updateToken = ()=>{
    setShowTokenInput(false);
  }
  const updateWeatherAPI = ()=>{
    setShowWeatherAPIInput(false);
  }

  return (
    <Box display="flex" flexDir="column" w="100%" textAlign="center">
      <Navbar/>
      <Box display="flex" flexDir="column" w="80%" margin="3rem auto auto auto" textAlign="center" border="2px solid black">
        <Text fontSize="2rem" as='b'>Settings</Text>
      <TableContainer>
  <Table variant='striped' colorScheme='blue'>
    <Thead>
      <Tr>
        <Th>Property</Th>
        <Th>Value</Th>
        <Th>Action</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Bot Name</Td>
        <Td>Know Weather</Td>
        <Td>
          <Box>
            {showNameInput ? <><Input background="white" w="50%"/><Button colorScheme='blue' onClick={updateName}>Update</Button></>:<Button colorScheme='blue' onClick={handleName}>Change</Button>}
          </Box>
        </Td>
      </Tr>
      <Tr>
        <Td>Bot Discription</Td>
        <Td>discription</Td>
        <Td>
          <Box>
            {showDiscriptionInput ? <><Input background="white" w="50%"/><Button colorScheme='blue' onClick={updateDiscription}>Update</Button></>:<Button colorScheme='blue' onClick={handleDiscription}>Change</Button>}
          </Box>
        </Td>
      </Tr>
      <Tr>
        <Td>Bot Token</Td>
        <Td>token</Td>
        <Td>
          <Box>
            {showTokenInput ? <><Input background="white" w="50%"/><Button colorScheme='blue' onClick={updateToken}>Update</Button></>:<Button colorScheme='blue' onClick={handleToken}>Change</Button>}
          </Box>
        </Td>
      </Tr>
      <Tr>
        <Td>Weather API</Td>
        <Td>api</Td>
        <Td>
          <Box>
            {showWeatherAPIInput ? <><Input background="white" w="50%"/><Button colorScheme='blue' onClick={updateWeatherAPI}>Update</Button></>:<Button colorScheme='blue' onClick={handleWeatherAPI}>Change</Button>}
          </Box>
        </Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
      </Box>
    </Box>
  )
}

export default Settings