import React, { useState } from "react";
import Carrito from "./Carrito";
import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import {faReact} from '@fortawesome/free-brands-svg-icons'

export default function NavBar({setValorBusqueda}){

    const handleChangeBusqueda = (e) => {
        setValorBusqueda(e.target.value);
    }

    const [isCarritoOculto,setCarritoOculto] = useState(true);    //Ocultar carrito.

    return(
        <>
            <header>
                <div className="containerTituloIcono">
                    <FontAwesomeIcon id="icon-react" icon={faReact} />
                    <h1>Tienda React</h1>
                </div>
                <input name="input-buscar" onChange={ e => handleChangeBusqueda(e)} placeholder="Busca un producto..." type="text"/>
                <button onClick={() => setCarritoOculto(!isCarritoOculto)}>
                    <FontAwesomeIcon id="icon-cart" icon={faCartShopping} />
                </button>
            </header>
            <Carrito ocultado={isCarritoOculto}/>
        </>
    );

}