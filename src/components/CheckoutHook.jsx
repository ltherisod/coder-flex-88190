import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../service/firebase'
import { useForm } from 'react-hook-form'
const CheckoutHook = () => {
    const [orderId, setOrderId]= useState('')
    const {register, handleSubmit, formState:{errors}, getValues}=useForm()
    const {cart, cartTotal, clear}= useContext(CartContext)
    // console.log('errores', errors)
    const finalizarCompra = (dataDelForm) => {
      
        // console.log('Todo OK', dataDelForm)
            let order = {
                comprador:{
                    name: dataDelForm.name,
                    lastname: dataDelForm.lastname,
                    address: dataDelForm.address,
                    email: dataDelForm.email,
                },
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
        <form onSubmit={handleSubmit(finalizarCompra)}>
            <input className='form-control' type='text' name='name' placeholder='Ingrese su nombre' {...register("name", {required:true, minLength:3})}/>
                {errors?.name?.type === 'required' && <span style={{color:'red'}}>Por favor complete este campo</span>}
                {errors?.name?.type === 'minLength' && <span style={{color:'red'}}>El campo nombre debe contener 3 caracteres como mínimo</span>}
              <input className='form-control' type='text' name='lastname' placeholder='Ingrese su apellido' {...register("lastname", {required:true, minLength:2})}  />
               {errors?.lastname?.type === 'required' && <span style={{color:'red'}}>Por favor complete este campo</span>}
                {errors?.lastname?.type === 'minLength' && <span style={{color:'red'}}>El campo apellido debe contener 2 caracteres como mínimo</span>}
                <input className='form-control' type='text' name='address' placeholder='Ingrese su dirección' {...register("address", {required:true, minLength:10, maxLength:35})}/>
                {errors?.address?.type === 'required' && <span style={{color:'red'}}>Por favor complete este campo</span>}
                {errors?.address?.type === 'minLength' && <span style={{color:'red'}}>El campo dirección debe contener 10 caracteres como mínimo</span>}
                {errors?.address?.type === 'maxLength' && <span style={{color:'red'}}>El campo dirección es demasiado largo</span>}
                  <input className='form-control' type='email' name='email' placeholder='Ingrese su correo'  {...register("email", {required:true})} />
                  {errors?.email?.type === 'required' && <span style={{color:'red'}}>Por favor complete este campo</span>}
                  <input className='form-control' type='email' name='second-email' placeholder='Repita su correo' {...register("secondemail", {required:true, validate:{equalsMails: mail2 => mail2 === getValues().email}})}/>
                  {errors?.secondemail?.type === 'required' && <span style={{color:'red'}}>Por favor complete este campo</span>}
                  {errors?.secondemail?.type === 'equalsMails' && <span style={{color:'red'}}>Los mails deben ser iguales</span>}
            <button className='btn btn-success' type='submit' disabled={!cart.length} >Enviar</button>
        </form>
    </div>
   }
   </>
  )
}

export default CheckoutHook