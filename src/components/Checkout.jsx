import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../service/firebase'

const Checkout = () => {
    const [buyer, setBuyer]= useState({})
    const [validMail, setValidMail] = useState('')
    const [orderId, setOrderId]= useState('')
    const {cart, cartTotal, clear}= useContext(CartContext)
    const buyerData = (e)=> {
        setBuyer(
            {
                ...buyer,
                [e.target.name]: e.target.value
            }
        )
    }
    console.log(buyer)
    const finalizarCompra = (e) => {
        //no recargue la app
        e.preventDefault()
        if(!buyer.name || !buyer.lastname || !buyer.email || !buyer.address){
            alert('Por favor completa todos los campos')
        }else if( buyer.email !== validMail){
            alert('Los mails no son iguales!')
        }else{
            let order = {
                comprador:buyer,
                compras: cart,
                total:cartTotal(),
                date:serverTimestamp()
            }
            const ventas = collection(db, "orders")
            //agregar un doc
            addDoc(ventas, order)
            .then((res)=>{
                setOrderId(res.id)
                clear()
            })
            .catch((error)=> console.log(error))
        }
    }
  return (
   <>
   {
    orderId 
    ?<div>
        <h2>Realizaste la compra correctamente! 🥳</h2>
        <h3>El id de la compra: {orderId}</h3>
    </div>
    : <div>
        <h1>Complete con sus datos</h1>
        <form onSubmit={finalizarCompra}>
            <input className='form-control' type='text' name='name' placeholder='Ingrese su nombre' onChange={buyerData}/>
              <input className='form-control' type='text' name='lastname' placeholder='Ingrese su apellido' onChange={buyerData}/>
                <input className='form-control' type='text' name='address' placeholder='Ingrese su dirección' onChange={buyerData}/>
                  <input className='form-control' type='email' name='email' placeholder='Ingrese su correo' onChange={buyerData}/>
                  <input className='form-control' type='email' name='second-email' placeholder='Repita su correo' onChange={(e)=> setValidMail(e.target.value)}/>
            <button className='btn btn-success' type='submit'>Enviar</button>
        </form>
    </div>
   }
   </>
  )
}

export default Checkout