import { useState } from 'react'
import ListaDeProductos from './components/ListaDeProductos'
import NavBar from './components/NavBar';
import { CarritoProvider } from './components/CarritoProvider';


export default function App() {

  const [valorBusqueda,setValorBusqueda] = useState('');
  
  return (
    <CarritoProvider>
      <NavBar setValorBusqueda={setValorBusqueda}/>
      <ListaDeProductos valorDeBusqueda = {valorBusqueda}/>
    </CarritoProvider>
  )
}
