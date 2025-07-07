import React, { useState } from "react";

const InputRealTime = () => {
  // Definir un estado para almacenar el valor del input
  const [inputValue, setInputValue] = useState("");

  // Función para manejar el cambio en el input
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Escribe algo..."
      />
      <p>Lo que escribiste: {inputValue}</p>
    </div>
  );
};

export default InputRealTime;
