import React from "react";
import Producto from "./Producto";
import productos from "../assets/productos";
import './ListaDeProductos.css';
import { useCarritoDispatch } from "./CarritoProvider";

export default function ListaDeProductos({valorDeBusqueda}){

    const dispatch = useCarritoDispatch();

    const getIdProducto = (id) => {     //Este metodo es llamado en Producto.
        dispatch({
            type: 'agregar-producto',
            producto: (productos.find(producto => producto.id === id)),
        })
    }
    //Busco los productos que coincidan con el valor que ingreso el usuario.
    let productosFiltrados = productos.filter(producto => valorDeBusqueda.toLowerCase() === ((producto.nombre).slice(0,valorDeBusqueda.length)).toLowerCase());

    return (
        <>
            <div className="containerProductos">
                {((productosFiltrados)?productosFiltrados:productos).map(producto => (
                    <Producto 
                        key={producto.id} 
                        imagenURL={producto.imagenURL} 
                        nombre={producto.nombre} 
                        precio={producto.precio} 
                        agregarAlCarrito={() => getIdProducto(producto.id)}
                    />
                ))}
            </div>
        </>
    )
}