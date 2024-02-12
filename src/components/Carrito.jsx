import React, { useState } from "react";

export default function Carrito({productos = [],ocultado,setProductos}){

    const handleBorrar = (index) => {
        console.log(index)
        let productosCarritoAct = [...productos];
        productosCarritoAct.splice(index,1);
        setProductos(productosCarritoAct);
    }

    return(
        <>
            <div hidden={ocultado}>
                {productos.map((producto,index) => (
                    <div key={index}>
                        <img src={producto.imagenURL} alt="imagen" />
                        <h3>{producto.nombre}</h3>
                        <p>${producto.precio}</p>
                        <button onClick={() => handleBorrar(index)}>X</button>
                    </div>
                ))}
            </div>
        </>
    )
}