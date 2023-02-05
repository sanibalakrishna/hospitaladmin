import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-screen w-screen bg-[#B4EDF2] flex justify-center items-center">
    <Login/>
    </div>
  )
}

export default App
