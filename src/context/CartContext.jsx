import { useState } from "react";
import { createContext } from "react";

//creacion del contexto(cajita)
export const CartContext = createContext()

//creacion del proveedor(envolver y dar acceso a las herramientas)
export const CartProvider = ({children})=>{
    const [cart, setCart]=useState([])

    //herramientas (funciones y datos)

    //agregar un item al carrito, contempla duplicados
    const addItem = (item, qty)=>{
        // console.log({...item, quantity:qty})
        if(IsInCart(item.id)){
            //ya existe
            // console.log('ya existe')
            setCart(
                cart.map((prod)=>{
                    if(prod.id === item.id){
                        //encuentra el repetido y modifico cantidades
                        return {...prod, quantity: prod.quantity + qty}
                    }else{
                        //retorno sin modificar
                        return prod
                    }
                })
            )

        }else{
            //no existe, lo agrego tal cual
            setCart([...cart, {...item, quantity:qty}])
        }
    }
 //borre todo el carrito
    const clear = ()=>{
        setCart([])
    }

    //eliminar un item del array

    const removeItem = (id)=> {
        setCart(cart.filter((prod)=> prod.id !== id))
    }

    //devolver un booleano si ese prod esta o no en el carrito
    const IsInCart =(id)=> {
        return cart.some((prod)=> prod.id === id)
    }


    
    return(
        <CartContext.Provider value={{cart, addItem, clear, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}