import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { useSelector } from 'react-redux';
import Home from './pages/Home';
import Users from './pages/Users';
import Login from './pages/Login';
import Settings from './pages/Settings';

import "./App.css"

const App = () => {
  // const {admin} = useSelector((state)=>({...state.admin}))
  return (
    <div className='App'>
    <BrowserRouter>
    <Routes>

      {JSON.parse(localStorage.getItem("profile")) ? 
      <Route path="/" element={<Home/>}/>:<Route path="/" element={<Login/>}/> }
      <Route path="/users" element={<Users/>}/>
      <Route path="/settings" element={<Settings/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;