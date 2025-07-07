import React, { useState, useEffect } from "react";

const SimuladorDeCarga = () => {
  // Estado para controlar el mensaje
  const [mensaje, setMensaje] = useState("Cargando...");

  // useEffect para simular un retraso
  useEffect(() => {
    // Setear un temporizador de 3 segundos
    const timer = setTimeout(() => {
      setMensaje("Listo"); // Cambiar el mensaje a "Listo"
    }, 3000); // 3000 milisegundos = 3 segundos

    // Limpiar el temporizador cuando el componente se desmonte
    return () => clearTimeout(timer);
  }, []); // El array vacío asegura que este efecto solo se ejecute una vez al montar

  return (
    <div>
      <h1>{mensaje}</h1>
    </div>
  );
};

export default SimuladorDeCarga;
