import React from "react";
import './ProductoEnCarrito.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from "@fortawesome/free-solid-svg-icons";

export default function ProductoEnCarrito({producto = [],index,borrar,modificarCantidad}) {
    return(
        <div key={index} className="containerProductoCarrito">
            <img src={producto.imagenURL} alt="imagen" />
            <h3>{producto.nombre}</h3>
            <p>${(producto.precio*producto.cantidad).toFixed(2)}</p>
            <div className="containerModCantProducto">
                <button onClick={() => modificarCantidad(index,false)}>-</button>
                <label>{producto.cantidad}</label>
                <button onClick={() => modificarCantidad(index,true)}>+</button>
            </div>
            <button id="btn-borrar" onClick={() => borrar(index)}>
                <FontAwesomeIcon icon={faX}/>
            </button>
        </div>
    )
}