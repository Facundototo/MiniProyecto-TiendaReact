import { useReducer, useState } from 'react'
import ListaDeProductos from './components/ListaDeProductos'
import NavBar from './components/NavBar';
import { carritoReducer } from './assets/carritoReducer';
import { ModCantProdContext,DispatchContext } from './assets/Context'; 


function App() {

  const modCantProductoCarrito = (index,isAum) => {   //Funcion para aumentar o disminuir la cantidad de un producto ya agregado al carrito. Este se lo paso al componente Carrito => ProductoEnCarrito.
    dispatch({
      type: 'modificar-cantidad',
      indexProducto:index,
      isAum:isAum
    })
  }

  const agregarProducto = (producto) => {   //Este metodo se pasa por parametro al Componente ListaDeProductos => Producto, de Hijo a Padre.
    dispatch({
      type: 'agregar-producto',
      producto: producto,
    })
  }

  const [productosCarrito,dispatch] = useReducer(carritoReducer,[]);
  const [valorBusqueda,setValorBusqueda] = useState('');

  return (
    <>
      <ModCantProdContext.Provider value={modCantProductoCarrito}><DispatchContext.Provider value={dispatch}>
        <NavBar 
          productosAlCarrito={productosCarrito} 
          setValorBusqueda={setValorBusqueda}
        />
      </DispatchContext.Provider></ModCantProdContext.Provider>
      
      <ListaDeProductos 
        agregarProductoAlCarrito={agregarProducto}
        valorDeBusqueda = {valorBusqueda}
      />
    </>
  )
}

export default App;
