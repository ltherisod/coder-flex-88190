import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const CartView = () => {
    const {cart, clear, removeItem, cartTotal}= useContext(CartContext)

    const preConfirm = () =>{
        Swal.fire({
            title:'¿Estas seguro de borrar todo el carrito?',
            showDenyButton:true,
            denyButtonText:'No',
            confirmButtonText:'Si'
        }).then((result)=>{
            if(result.isConfirmed){
                clear()
            }else if( result.isDenied){
                //en el caso que quieran poner algo en el NO
            }
        })
    }
  return (
    <div>
        <h2>Tu carrito 🛒</h2>

        <div>
            {/* si quieren lo pueden hacer asi tambien */}
            {/* {cart.map((compra)=><CartItem key={compra.id} compra={compra}/>)} */}
            {
                cart.map((compra)=>(
                    <div key={compra.id} style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%', padding:'2rem'}}>
                            <img src={compra.img} alt={compra.name} style={{width:'10rem'}}/>
                            <span>{compra.name}</span>
                             <span>${compra.price},00</span>
                              <span>{compra.quantity}</span>
                               <span>precio final:${compra.price * compra.quantity},00</span>
                               <button className='btn btn-danger' onClick={()=> removeItem(compra.id)}>X</button>
                    </div>
                ))
            }
        </div>
        {/* mostar el total a pagar */}
        <span>Total a pagar:${cartTotal()} </span>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'80%', padding:'2rem'}}>
            <button className='btn btn-danger' onClick={preConfirm}> Vaciar carrito</button>
            <Link className='btn btn-success' to='/checkout'>Terminar Compra</Link>
        </div>
    </div>
  )
}

export default CartView