import React, { useState } from 'react'
import { Box,VStack, FormControl, FormLabel, Input, InputGroup, InputRightElement, Button, useToast, Text } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {adminlogin} from "../redux/features/adminSlice";

const Login = () => {
  const [show,setShow] = useState(false);
  const handleClick = ()=>setShow(!show);
  const [loginId,setLoginId] = useState();
  const [password,setPassword] = useState();
  const [loading,setLoading] = useState(false);
  const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginId && password) {
        const formData = {
            loginId: loginId,
            password: password
        }
        dispatch(adminlogin({ formData, navigate, toast }))
    }
    };
    // console.log(JSON.parse(localStorage.getItem("profile")))

  return (
    <Box display="flex" flexDir="column" w="100%" margin="auto">
        <Text textAlign="center" fontSize="3rem"> Know Weather Telegram Bot</Text>
        <Text textAlign="center" fontSize="3rem"> Admin Login Page</Text>
    <Box display="flex" flexDir="column" w="40%" margin="auto" marginTop="2%" border="2px solid black" borderRadius="10px" backgroundColor="#ECF8F9">
    <VStack spacing="10px" padding="2rem">
      <FormControl id="email" isRequired>
        <FormLabel>Login ID</FormLabel>
        <Input
          value={loginId}
          type="text"
          placeholder="Enter Your Login Id"
          onChange={(e) => setLoginId(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={show ? "text" : "password"}
            placeholder="Enter password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={handleSubmit}
        isLoading={loading}
      >
        Login
      </Button>
    </VStack>
    </Box>
    </Box>
  )
}

export default Login;
