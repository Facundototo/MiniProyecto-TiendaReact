import ProductoEnCarrito from "./ProductoEnCarrito";
import './Carrito.css';


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

export default function Carrito({productosEnCarrito = [],ocultado,setProductos,modCantProd}){

    const handleBorrar = (index) => {       
        let productosCarritoAct = [...productosEnCarrito];       //Creo otra variable para no modificar la prop.
        productosCarritoAct.splice(index,1);    //Borro el producto con el index.
        setProductos(productosCarritoAct);      //Actualizo el carrito con el state de App.
    }

    let productosAnadidosAlCarrito = 
        productosEnCarrito.map((producto,index) => (
            <ProductoEnCarrito 
                key={index}
                producto={producto} 
                index={index} 
                borrar={handleBorrar} 
                modificarCantidad={modCantProd}
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
                    <InfoTotal productos={productosEnCarrito} onClickPagar={() => {setProductos([])}}/> 
                </>)
            }             
        </div>
    )
}