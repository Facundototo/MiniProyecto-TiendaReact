import React from "react";

export default function ProductoEnCarrito({producto = [],index,borrar,modificarCantidad}) {
    return(
        <div key={index}>
            <img src={producto.imagenURL} alt="imagen" />
            <h3>{producto.nombre}</h3>
            <p>${producto.precio*producto.cantidad}</p>
            <div>
                <button onClick={() => modificarCantidad(index,false)}>-</button>
                {producto.cantidad}
                <button onClick={() => modificarCantidad(index,true)}>+</button>
            </div>
            <button onClick={() => borrar(index)}>X</button>
         </div>
    )
}