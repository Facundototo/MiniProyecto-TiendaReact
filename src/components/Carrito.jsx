import React, { useState } from "react";
import ProductoEnCarrito from "./ProductoEnCarrito";
import './Carrito.css';

export default function Carrito({productosEnCarrito = [],ocultado,setProductos,modCantProd}){

    const handleBorrar = (index) => {       
        let productosCarritoAct = [...productosEnCarrito];       //Creo otra variable para no modificar la prop.
        productosCarritoAct.splice(index,1);    //Borro el producto con el index.
        setProductos(productosCarritoAct);      //Actualizo el carrito con el state de App.
    }

    return(
        <>
            <div hidden={ocultado} className="containerCarrito">
                {(productosEnCarrito.length === 0) ?
                    (<h2>No hay productos en el carrito</h2>)
                    :
                    (<>
                        {productosEnCarrito.map((producto,index) => (
                            <ProductoEnCarrito 
                                key={index}
                                producto={producto} 
                                index={index} 
                                borrar={handleBorrar} 
                                modificarCantidad={modCantProd}
                            />
                        ))}
                        <div className="containerBtnPagar">
                            <button>Pagar</button> 
                        </div> 
                    </>)
                }             
            </div>
            
        </>
    )
}