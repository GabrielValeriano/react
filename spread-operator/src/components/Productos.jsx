import { useState } from "react";

export function Producto() {

  // Estado inicial arreglo de productos
  const [productos, setProductos] = useState([
    { nombre: "Camiseta", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
  ]);

  // Funcion que agrega una nueva propiedad "Descuento: true" a cada producto
  const agregarDescuento = () => {
    const Descuento = productos.map((n) => ({
      ...n,
      descuento: "true",
    }));
    setProductos(Descuento);
    console.log(productos)
  };

  return (
    <>
      <h3>Productos</h3>
      <button onClick={agregarDescuento}>Agregar descuento</button>
    </>
  );
}
