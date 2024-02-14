import React from "react";
import './Producto.css'

export default function Producto({imagenURL,nombre,precio,agregarAlCarrito,id}) {
    return(
        <>
            <div className="containerProducto">
                <img src={imagenURL} alt={'imagen'+nombre}/>
                <div className="containerInfoProducto">
                    <label>{nombre}</label>
                    <label>${precio}</label>
                    <button id="btn-anadir-carrito" onClick={() => agregarAlCarrito(id)}>Anadir al Carrito</button>
                </div>
            </div>
        </>
    )
}