import ProductoEnCarrito from "./ProductoEnCarrito";
import './Carrito.css';
import { useContext } from "react";
import { DispatchContext } from "../assets/Context";


export function InfoTotal({productos,onClickPagar}){

    let precioTotal = 0;
    let cantTotal = 0;

    if(productos.length > 0){
        precioTotal = (productos.map(producto => producto.precio*producto.cantidad).reduce((acumulador,valorActual) => acumulador+valorActual)).toFixed(2);     //Costo total.
        cantTotal = productos.map(producto => producto.cantidad).reduce((acumulador,valorActual) => acumulador+valorActual);    //Cantidad total.
    }

    return(
        <div className="containerBtnPagar">
            <p>Cantidad - {cantTotal}</p>
            <p>Total - ${precioTotal}</p>
            <button onClick={onClickPagar}>Pagar</button> 
        </div> 
    )
}

export default function Carrito({productosEnCarrito = [],ocultado}){

    const dispatch = useContext(DispatchContext);

    const handleBorrar = (index) => {      
        dispatch({
            type: 'borrar-producto',
            indexProducto:index
        })
    }

    const handlePagarCarrito = () => {
        dispatch({
            type: 'pagar-carrito'
        })
    }

    let productosAnadidosAlCarrito = 
        productosEnCarrito.map((producto,index) => (
            <ProductoEnCarrito 
                key={index}
                producto={producto} 
                index={index} 
                borrar={handleBorrar} 
            />
        ));

    return(
        <div className={`containerCarrito ${(ocultado)?'':'mostrar'}`}>
            <p>Carrito</p>
            {(productosEnCarrito.length === 0) ?
                (<h2>No hay productos en el carrito</h2>)
                :
                (<>
                    {productosAnadidosAlCarrito}
                    <InfoTotal productos={productosEnCarrito} onClickPagar={handlePagarCarrito}/>    
                </>)
            }             
        </div>
    )
}