import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Login from './pages/Login'
import {BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'
import Home from './pages/Home'
import { useAuthContext } from './hooks/useAuthContext'

function App() {
  const [count, setCount] = useState(0)
  const {admin} = useAuthContext();

  return (
    <div className="h-screen w-screen bg-[#0198A5] md:bg-[#B4EDF2] flex justify-center items-center">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={admin?<Home/>:<Navigate to='/login'/>}></Route>
      <Route path='/login' element={!admin?<Login/>:<Navigate to='/'/>}></Route>
    </Routes>
    </BrowserRouter>
   
    </div>
  )
}

export default App
