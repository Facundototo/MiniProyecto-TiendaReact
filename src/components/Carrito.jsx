import ProductoEnCarrito from "./ProductoEnCarrito";
import './Carrito.css';
import { useCarritoDispatch,useProductosCarrito } from './CarritoProvider';
import { useEffect, useState } from "react";

export function InfoTotal({productos,onClickPagar}){

    const [total,setTotal] = useState({cant:0,precio:0});

    useEffect(() => {
        //Recorro el array productos y retorna otro con el resultado del precio, ese array le hago un reduce que acumula los valores.
        const precioTotal = (productos.map(producto => producto.precio*producto.cantidad).reduce((acumulador,valorActual) => acumulador+valorActual)).toFixed(2);     //Costo total.
        const cantTotal = productos.map(producto => producto.cantidad).reduce((acumulador,valorActual) => acumulador+valorActual);    //Cantidad total.

        setTotal({cant:cantTotal,precio:precioTotal})
    },[productos])

    return(
        <div className="containerBtnPagar">
            <p>Cantidad - {total.cant}</p>
            <p>Total - ${total.precio}</p>
            <button onClick={onClickPagar}>Pagar</button> 
        </div> 
    )
}

export default function Carrito({ocultado}){

    const dispatch = useCarritoDispatch();      //Uso los hooks personalizados.
    const productosEnCarrito = useProductosCarrito();

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