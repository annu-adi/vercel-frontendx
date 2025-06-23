import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Components/Signup'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Components/Login'
import Home from './Components/Home'
import Nav from './Components/Nav'
import Create from './Components/Create'
import Info from './Components/Info'

import { useState } from 'react'



function App() {
  

  return (
  
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path='/' element={<Info />}></Route>
      <Route path='/register' element={<Signup />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/home' element={<Home />}></Route>
       <Route path='/create' element={<Create />}></Route>


    </Routes>
    </BrowserRouter>
    
    
  )
}

export default App
