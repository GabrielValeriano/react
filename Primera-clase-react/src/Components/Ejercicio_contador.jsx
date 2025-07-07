import React, { useState } from "react";

function Contador() {
  // Declaración del estado para el contador
  const [contador, setContador] = useState(0);

  // Función para incrementar el contador
  const Sumar = () => setContador(contador + 1);

  // Función para resetear el contador
  const restar = () => setContador(contador - 1);

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={Sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
    </div>
  );
}

export default Contador;
