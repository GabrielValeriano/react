import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Operator } from './components/operator'
import { Contador } from './components/Contador'
import { Producto } from './components/Productos'
import { Persona } from './components/personas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Persona></Persona>
        <Contador></Contador>
        <Producto></Producto>
      </div>

    </>
  )
}

export default App
