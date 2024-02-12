import React from "react";

export default function Producto({imagenURL,nombre,precio,agregarAlCarrito,id}) {
    return(
        <>
            <div>
                <img src={imagenURL} alt={'imagen'+nombre}/>
                <h3>{nombre}</h3>
                <p>{precio}</p>
                <button onClick={() => agregarAlCarrito(id)}>Anadir al Carrito</button>
            </div>
        </>
    )
}