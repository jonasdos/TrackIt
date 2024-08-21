import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/LoginPage'
import SignUp from './pages/SignUpPage'
import Home from './pages/HomePage'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/cadastro' element={<SignUp/>} />
        <Route path='/habitos' element={<Home/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
