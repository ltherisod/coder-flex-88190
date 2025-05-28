import React, { useState, useEffect } from 'react'

const ItemCount = ({stock}) => {
    // console.log(props.stock)
    const [count, setCount] =useState(1)
    const [compra, setCompra]= useState(false)
    const sumar = ()=>{
        if(count < stock){

            setCount(count +1)
        }
    }
    const restar = ()=>{
        if(count > 0){

            setCount(count -1)
        }
    }
    const comprarItem = () => {
        setCompra(!compra)
    }

    //No se recomienda 
    useEffect(()=>{
        console.log('Sin el array de dependencias me ejecuto SIEMPRE')
    })

    //Es el mas usado
     useEffect(()=>{
        console.log('Con el array de dependencias vacio, me ejecuto UNA VEZ')
    },[])

    //Se usa en casos especificos
      useEffect(()=>{
        console.log('Con el array de dependencias con datos, me ejecuto cuando se monta el componente y cada vez que lo que esta escuchando se actualice')
    },[compra])

    console.log('soy item count')


  return (
    <div>
        <div>
        <button className='btn btn-danger' onClick={restar}>-</button>
        <span className='btn'>{count}</span>
        <button className='btn btn-success' onClick={sumar}>+</button>
    </div>
    <button className='btn btn-primary' onClick={comprarItem} disabled={stock === 0}>Comprar</button>
    </div>
  )
}

export default ItemCount