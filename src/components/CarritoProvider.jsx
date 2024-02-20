import React from "react";
import { createContext, useContext,useReducer } from "react"; 

const ProductosCarritoContext = createContext(null);        //Context para pasar la variable de estado.
const DispatchContext = createContext(null);         //Context para pasar la funcion dispatch del useReducer().


export function CarritoProvider({children}){        //El children vendrian a ser todos los elementos que necesitan de estos Context.

    const [productosCarrito,dispatch] = useReducer(carritoReducer,[]);

    return(
        <ProductosCarritoContext.Provider value={productosCarrito}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </ProductosCarritoContext.Provider>
    )
}


export function carritoReducer(productosCarrito,action){    
    switch (action.type) {
        case 'agregar-producto':{
            let indexProductoYaAnadido = productosCarrito.findIndex(productoCarrito => productoCarrito.id === action.producto.id); //Busco el indice si el producto que se quiere agregar fue anadido anteriormente.
            if(indexProductoYaAnadido !== -1){    //Si es -1 quiere decir que el .findIndex() no encontro al producto.
                return modCantProductoCarrito(productosCarrito,indexProductoYaAnadido,true);
            }else{
                const nuevoProducto = {...action.producto,cantidad : 1}    //Creo la propiedad cantidad en el objeto producto.
                return [...productosCarrito,nuevoProducto];   //Agrega el producto al array del carrito.
            }
        }
            
        case 'modificar-cantidad':{
            return modCantProductoCarrito(productosCarrito,action.indexProducto,action.isAum);
        }
    
        case 'borrar-producto':{ 
            return productosCarrito.filter((producto,index) => index !== action.indexProducto);     //Con el filter retorno solo los productos que no coincidan con ese id.
        }
        case 'pagar-carrito':{
            return [];      //Limpio todo el array.
        }
        default:
            console.error('No existe ' + action.type);
    }

}

const modCantProductoCarrito = (productosCarrito,indexProducto,isAum) => {      //Funcion reutilizable en 2 casos de carritoReducer().
    const productosCarritoAct = productosCarrito.map((producto,index) => {
        if(index === indexProducto){
            let nuevaCantidad = ((isAum)?producto.cantidad+1:producto.cantidad-1);
            if(nuevaCantidad > 0){
                return {...producto, cantidad: nuevaCantidad};      //Aplico la cantidad nueva al producto que se toco.
            }
        }
        return producto;
    })

   return productosCarritoAct;    //Actualizo el estado.
}

export const useCarritoDispatch = () => {       //Hooks personalizados.
    return useContext(DispatchContext);
}
export const useProductosCarrito = () => {
    return useContext(ProductosCarritoContext);
}