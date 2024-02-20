import React from "react";
import './ProductoEnCarrito.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useCarritoDispatch } from './CarritoProvider';

export default function ProductoEnCarrito({producto = [],index,borrar}) {
 
    const dispatch = useCarritoDispatch();

    const handleModCantidad = (index,isAum) => {
        dispatch({
            type: 'modificar-cantidad',
            indexProducto:index,
            isAum:isAum
        })
    }

    return(
        
        <div key={index} className="containerProductoCarrito">
            <img src={producto.imagenURL} alt="imagen" />
            <h3>{producto.nombre}</h3>
            <p>${(producto.precio*producto.cantidad).toFixed(2)}</p>
            <div className="containerModCantProducto">
                <button onClick={() => handleModCantidad(index,false)}>-</button>
                <h4>{producto.cantidad}</h4>
                <button onClick={() => handleModCantidad(index,true)}>+</button>
            </div>
            <button id="btn-borrar" onClick={() => borrar(index)}>
                <FontAwesomeIcon icon={faX}/>
            </button>
        </div>
    )
}