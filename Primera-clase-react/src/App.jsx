import { useEffect } from "react";
import "./App.css";

// siempre que sea import sea 'nombrado' van llaves

import Contador from "./Components/Ejercicio_contador";
import SimuladorDeCarga from "./Components/Ejercicio_Montartimer";
import InputRealTime from "./Components/Ejercicio_Mostrar";
import SaludoPersonalizado from "./Components/Ejercicio_SaludoPers";
import EffectOnMount from "./Components/Ejercicio_useEffect";

// si el import es no nombrado o por defu

function App() {
  //el componente es una funcion que devuelve un contenido renderizable
  // el componente siempre arranca con mayuscula

  //npm install para instalar dependencia
  //npm run dev para correr el programa

 useEffect{()=> {
  //useEffect ejecuta el codigo una vez si no hay nada en los
  //corchetes, y si hay variables(dependencias)
  //se va a ejecutar tanto como actualize
 }}
 
  return (
    <>
      <Contador />
      <InputRealTime />
      <EffectOnMount />
      <SimuladorDeCarga />
      <SaludoPersonalizado />
    </>
  );
}

export default App;
