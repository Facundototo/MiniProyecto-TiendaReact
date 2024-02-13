import React from "react";
import './Producto.css'

export default function Producto({imagenURL,nombre,precio,agregarAlCarrito,id}) {
    return(
        <>
            <div className="containerProducto">
                <img src={imagenURL} alt={'imagen'+nombre}/>
                <label>{nombre}</label>
                <label>${precio}</label>
                <button onClick={() => agregarAlCarrito(id)}>Anadir al Carrito</button>
            </div>
        </>
    )
}