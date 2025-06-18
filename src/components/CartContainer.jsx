import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import EmpyCart from './EmpyCart'
import CartView from './CartView'
const CartContainer = () => {
    const {cart} = useContext(CartContext)
  return (
    <>
        {
            !cart.length ? <EmpyCart/> : <CartView/>
        }
    </>
  )
}

export default CartContainer