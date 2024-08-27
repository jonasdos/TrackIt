import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/LoginPage'
import SignUp from './pages/SignUpPage'
import Home from './pages/HomePage'
import HomeHoje from './pages/HomeHojePage'
import { useState } from 'react'
import { UserProvider } from './contexts/UserContext.jsx'

function App() {
  

  return (
    <>
    <UserProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/cadastro' element={<SignUp/>} />
        <Route path='/habitos' element={<Home/>} />
        <Route path='/hoje' element={<HomeHoje/>} />  
      </Routes>
      </BrowserRouter>
      </UserProvider>
    </>
  )
}

export default App
