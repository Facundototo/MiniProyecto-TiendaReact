import React, { useState } from "react";
import Carrito from "./Carrito";
import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import {faReact} from '@fortawesome/free-brands-svg-icons'

export default function NavBar({productosAlCarrito,setProductoAlCarrito,modCantProductoAlCarrito}){

    const [isCarritoOculto,setCarritoOculto] = useState(true);    //Ocultar carrito.

    return(
        <>
            <header>
                <div className="containerTituloIcono">
                    <FontAwesomeIcon id="icon-react" icon={faReact} />
                    <h1>Libre Mercado</h1>
                </div>
                <input placeholder="Busca un producto..."type="text"/>
                <button onClick={() => setCarritoOculto(!isCarritoOculto)}>
                    <FontAwesomeIcon id="icon-cart" icon={faCartShopping} />
                </button>
            </header>
            <div>
                <Carrito 
                    ocultado={isCarritoOculto} 
                    productosEnCarrito={productosAlCarrito} 
                    setProductos={setProductoAlCarrito} 
                    modCantProd={modCantProductoAlCarrito}
                ></Carrito>
            </div>
        </>
    );

}