import { createContext } from "react";

export const ModCantProdContext = createContext();      //Context para pasar una funcion de App a ProductoEnCarrito.
export const DispatchContext = createContext();         //Context para pasar la funcion dispatch del useReducer().