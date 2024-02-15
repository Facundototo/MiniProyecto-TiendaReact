import { useState } from 'react'
import ListaDeProductos from './components/ListaDeProductos'
import NavBar from './components/NavBar';


function App() {

  const modCantProductoCarrito = (index,isAum) => {   //Funcion para aumentar o disminuir la cantidad de un producto ya agregado al carrito. Este se lo paso al componente Carrito => ProductoEnCarrito.
    let productosCarritoAct = [...productosCarrito];

    (isAum)?productosCarritoAct[index].cantidad++:productosCarritoAct[index].cantidad--; 
    if(productosCarritoAct[index].cantidad === 0){productosCarritoAct.splice(index,1);}   //Si el usuario lo reduce hasta cero la cantidad, borro el producto del carrito.

    setProductoCarrito(productosCarritoAct);    //Actualizo el estado. 
  }

  const agregarProducto = (producto) => {   //Este metodo se pasa por parametro al Componente ListaDeProductos => Producto, de Hijo a Padre.

    let indexProductoYaAnadido = productosCarrito.findIndex(productoCarrito => productoCarrito.id === producto.id); //Busco el indice si el producto que se quiere agregar fue anadido anteriormente.

    if(indexProductoYaAnadido !== -1){    //Si es -1 quiere decir que el .findIndex() no encontro al producto.
      modCantProductoCarrito(indexProductoYaAnadido,true);
    }else{
      producto.cantidad = 1;    //Creo la propiedad cantidad en el objeto producto.
      setProductoCarrito([...productosCarrito,producto]);   //Agrega el producto al array del carrito.
    }
  }

  const [productosCarrito,setProductoCarrito] = useState([]);   //Productos del carrito.
  const [valorBusqueda,setValorBusqueda] = useState('');

  return (
    <>
      <NavBar 
        productosAlCarrito={productosCarrito} 
        setProductoAlCarrito={setProductoCarrito} 
        modCantProductoAlCarrito={modCantProductoCarrito}
        setValorBusqueda={setValorBusqueda}
      />
      <ListaDeProductos 
        agregarProductoAlCarrito={agregarProducto}
        valorDeBusqueda = {valorBusqueda}
      />
    </>
  )
}

export default App;
