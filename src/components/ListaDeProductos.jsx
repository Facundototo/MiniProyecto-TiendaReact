import React from "react";
import Producto from "./Producto";
import productos from "../assets/productos";

export default function ListaDeProductos({agregarProductoAlCarrito}){


    const getIdProducto = (id) => {
        agregarProductoAlCarrito(productos.find(producto => producto.id === id));
    }

    return (
        <>
            <div>
                {productos.map(producto => (
                    <Producto key={producto.id} imagenURL={producto.imagenURL} nombre={producto.nombre} precio={producto.precio} agregarAlCarrito={() => getIdProducto(producto.id)}></Producto>
                ))}
            </div>
        </>
    )
}