//importamos el hook useContext para usar el contexto
import React, {useContext, useState} from 'react'
import ItemCount from './ItemCount'
//importamos el contexto que queremos utilizar
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
const ItemDetail = ({detail}) => {
  const {addItem} = useContext(CartContext)
  //siguiendo a raja tabla la actividad
  // const [quantity, setQuantity]= useState(0)
  //   const onAdd = (cantidad)=>{
  //     addItem(detail, cantidad)
  //     setQuantity(cantidad)
  //     console.log(cantidad, quantity, 'dentro de la funcion')
  //   }
  // console.log(quantity, 'fuera de la funcion')

  //recomendacion de la profe
  const [purchase, setPurchase]= useState(false)
 
    const onAdd = (cantidad)=>{
    addItem(detail, cantidad)
    setPurchase(true)
  }
  return (
    <div style={{padding:'2rem', display:'flex', flexDirection:'column', alignItems:'center'}}>
        <h2>Detalle del producto: {detail.name}</h2>
        <img src={detail.img} alt={detail.name}/>
        <p>{detail.description}</p>
        <p>${detail.price},00</p>
        <p>Stock disponible: {detail.stock}</p>
       {/* {
        quantity !== 0 ? <Link className='btn btn-dark' to='/cart'> Ir al carrito</Link>
       : <ItemCount stock={detail.stock} onAdd={onAdd}/>}  */}

       {purchase ? <Link className='btn btn-dark' to='/cart'> Ir al carrito</Link> : <ItemCount stock={detail.stock} onAdd={onAdd}/>}
    </div>
  )
}

export default ItemDetail