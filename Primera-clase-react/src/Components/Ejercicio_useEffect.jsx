import React, { useEffect } from "react";

// useEffect con array vacío [] para ejecutar el efecto solo una vez al montar el componente
const EffectOnMount = () => {
  useEffect(() => {
    console.log("¡El componente se ha montado!");
  }, []); // El array vacío asegura que el efecto se ejecute solo una vez.

  return (
    <div>
      <h1>Bienvenido a mi componente</h1>
      <h2>Abre la Consola Para ver el Mensaje</h2>
    </div>
  );
};

export default EffectOnMount;
