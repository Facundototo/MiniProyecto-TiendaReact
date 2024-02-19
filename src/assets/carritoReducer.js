

const modCantProductoCarrito = (productosCarrito,index,isAum) => {
    let productosCarritoAct = [...productosCarrito];
    if(productosCarrito[index].cantidad !== undefined){console.log('soy dif de undefined' + index)}else{console.log('soy undefined')}
    ((isAum)?productosCarritoAct[index].cantidad++:productosCarritoAct[index].cantidad--); 
    if(productosCarritoAct[index].cantidad === 0){productosCarritoAct.splice(index,1);}   //Si el usuario lo reduce hasta cero la cantidad, borro el producto del carrito.

   return productosCarritoAct;    //Actualizo el estado.
}


export function carritoReducer(productosCarrito,action){    
    switch (action.type) {
        case 'agregar-producto':{

            let indexProductoYaAnadido = productosCarrito.findIndex(productoCarrito => productoCarrito.id === action.producto.id); //Busco el indice si el producto que se quiere agregar fue anadido anteriormente.
            if(indexProductoYaAnadido !== -1){    //Si es -1 quiere decir que el .findIndex() no encontro al producto.
              return modCantProductoCarrito(productosCarrito,indexProductoYaAnadido,true);
            }else{
              action.producto.cantidad = 1;    //Creo la propiedad cantidad en el objeto producto.
              console.log(action.producto)
              return [...productosCarrito,action.producto];   //Agrega el producto al array del carrito.
            }
        }
            
        case 'modificar-cantidad':{
            return modCantProductoCarrito(productosCarrito,action.indexProducto,action.isAum);
        }
    
        case 'borrar-producto':{ 
            let productosCarritoAct = [...productosCarrito];
            productosCarritoAct.splice(action.indexProducto,1);
            return productosCarritoAct;
        }
        case 'pagar-carrito':
            return [];

        default:
            console.error('Error en el tipo ' + action.type);
    }

}