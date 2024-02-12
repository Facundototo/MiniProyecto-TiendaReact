import { useState } from 'react'
import './App.css'
import ListaDeProductos from './components/ListaDeProductos'
import Carrito from './components/Carrito';


function App() {

  const agregarProducto = (producto) => {
    setProductoCarrito([...productosCarrito,producto]);
  }

  const [productosCarrito,setProductoCarrito] = useState([]);
  const [isCarritoOculto,setCarritoOculto] = useState(true);

  return (
    <>

      <ListaDeProductos agregarProductoAlCarrito={agregarProducto}></ListaDeProductos>
      <button onClick={() => setCarritoOculto(!isCarritoOculto)}> Ver Carrito </button>
      <Carrito ocultado={isCarritoOculto} productos={productosCarrito} setProductos={setProductoCarrito}></Carrito>
      
    </>
  )
}

export default App;
