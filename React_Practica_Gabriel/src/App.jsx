import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [personajes, setPersonajes] = useState([])

  useEffect(()=>{
    fetch("https://rickandmortyapi.com/api/character")
     .then((res)=> res.json())
     .then((result) => setPersonajes(result.results));
  },[])
º

  return (
    <>
     {!personajes ? <div>cargando...</div>:
     <ul>
      {personajes.map((personajes)=>{
        <li>
          <h3>{personajes.name}</h3>
          <img src={personajes.image} alt="" />
        </li>
      })}
     </ul>
     }
    </>
  )
}

export default App
