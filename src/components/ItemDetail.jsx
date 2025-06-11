import React from 'react'
import ItemCount from './ItemCount'
const ItemDetail = ({detail}) => {

  const onAdd = (cantidad)=>{
    alert(`Agregaste ${cantidad} de items`)
  }

  return (
    <div style={{padding:'2rem', display:'flex', flexDirection:'column', alignItems:'center'}}>
        <h2>Detalle del producto: {detail.name}</h2>
        <img src={detail.img} alt={detail.name}/>
        <p>{detail.description}</p>
        <p>${detail.price},00</p>
        <p>Stock disponible: {detail.stock}</p>
        <ItemCount stock={detail.stock} onAdd={onAdd}/>
    </div>
  )
}

export default ItemDetail