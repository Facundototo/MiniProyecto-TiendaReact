import React from "react";
import Producto from "./Producto";
import productos from "../assets/productos";
import './ListaDeProductos.css';

export default function ListaDeProductos({agregarProductoAlCarrito}){


    const getIdProducto = (id) => {     //Este metodo es llamado en Producto.
        agregarProductoAlCarrito(productos.find(producto => producto.id === id));       //Encuentro el producto y se lo envio al metodo de App.
    }

    return (
        <>
            <div className="containerProductos">
                {productos.map(producto => (
                    <Producto key={producto.id} imagenURL={producto.imagenURL} nombre={producto.nombre} precio={producto.precio} agregarAlCarrito={() => getIdProducto(producto.id)}></Producto>
                ))}
            </div>
        </>
    )
}