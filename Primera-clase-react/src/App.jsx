import "./App.css";
import { Users } from "./Components/Users";
// siempre que sea import sea 'nombrado' van llaves
import Employees from "./Components/Employees";
// si el import es no nombrado o por defu

function App() {
  //el componente es una funcion que devuelve un contenido renderizable
  // el componente siempre arranca con mayuscula

  //npm install para instalar dependencia
  //npm run dev para correr el programa
  return (
    <>
      <Users name="Tomas, " />
      Hola mundo
      <Employees />
    </>
  );
}

export default App;
