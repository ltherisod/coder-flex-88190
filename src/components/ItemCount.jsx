import React, { useState} from 'react'

const ItemCount = ({stock}) => {
    const [count, setCount] =useState(1)
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
   


  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <div>
        <button className='btn btn-danger' onClick={restar}>-</button>
        <span className='btn'>{count}</span>
        <button className='btn btn-success' onClick={sumar}>+</button>
    </div>
    <button className='btn btn-primary'  disabled={stock === 0}>Comprar</button>
    </div>
  )
}

export default ItemCount