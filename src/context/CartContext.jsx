import { createContext, useState } from "react";


//crear nuestro contexto.
export const CartContext = createContext()

// crear el proveedor 
export const CartProvider = ({children}) => {
    const [cart, setCart]= useState([])
//datos y logica del carrito
//funciones que modifiquen cart

//agregar un item al carrito
const addItem = (item, cantidad) =>{
    if(isInCart(item.id)){
        // console.log('esta en el carrito')
        //sumar cantidades
        const carritoActualizado = cart.map((prod)=>{
            if(item.id === prod.id){
                //sumar las cantidades
                return {...prod, quantity: prod.quantity + cantidad}
            }else{
                //retornar el obj sin modificar
                return prod
            }
        })
        setCart(carritoActualizado)

        //version corta
        // setCart(
        //    cart.map((prod)=>{
        //     if(item.id === prod.id){
        //         //sumar las cantidades
        //         return {...prod, quantity: prod.quantity + cantidad}
        //     }else{
        //         //retornar el obj sin modificar
        //         return prod
        //     }
        // })
        // )
    }else{
        //agrego el item nuevo
        setCart([...cart, {...item, quantity:cantidad}])
    }
    // console.log("item:",item,'cantidad:', cantidad)
    // console.log({...item, quantity:cantidad})

}

//elimine un item del array
const removeItem = (id)=>{
    setCart(cart.filter((prod)=> prod.id !== id))
}

//borrar el carrito completo

const clear = () =>{
    setCart([])
}

//existe o no en el carrito, debe retornar un booleano

const isInCart= (id) =>{
    return cart.some((prod)=> prod.id === id)
}

//cantidad de items (sumar cantidades)
const cartQuantity = ()=>{
    return cart.reduce((acc, prod)=> acc += prod.quantity,0)
}

//total a pagar

const cartTotal = () =>{
    return cart.reduce((acc, prod)=> acc += prod.price * prod.quantity,0)
}

// const contextValue ={
//     cart,
// }
    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clear, cartTotal, cartQuantity}}>
            {children}
        </CartContext.Provider>
    )
}