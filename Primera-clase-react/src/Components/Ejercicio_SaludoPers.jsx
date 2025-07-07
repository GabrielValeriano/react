import React, { useState, useEffect } from "react";

const SaludoPersonalizado = () => {
  // Estado para el nombre ingresado
  const [nombre, setNombre] = useState("");
  // Estado para el saludo
  const [saludo, setSaludo] = useState("");

  // useEffect para imprimir en consola cada vez que el saludo cambie
  useEffect(() => {
    if (saludo) {
      console.log("Saludo actualizado");
    }
  }, [saludo]); // Se ejecuta cada vez que el saludo cambia

  // Función para manejar el cambio en el input
  const handleChange = (event) => {
    setNombre(event.target.value); // Actualiza el nombre con lo que el usuario escribe
  };

  // Función para manejar el clic en el botón
  const handleClick = () => {
    setSaludo(`Hola, ${nombre}!`); // Establece el saludo personalizado
  };

  return (
    <div>
      <input
        type="text"
        value={nombre}
        onChange={handleChange}
        placeholder="Escribe tu nombre"
      />
      <button onClick={handleClick}>Saludar</button>
      {saludo && <h2>{saludo}</h2>}
    </div>
  );
};

export default SaludoPersonalizado;
