import React from 'react'

const ItemDetail = ({detail}) => {
  return (
    <div style={{padding:'2rem', display:'flex', flexDirection:'column', alignItems:'center'}}>
        <h2>Detalle del producto: {detail.name}</h2>
        <img src={detail.img} alt={detail.name}/>
        <p>{detail.description}</p>
        <p>${detail.price},00</p>
        <p>Stock disponible: {detail.stock}</p>
    </div>
  )
}

export default ItemDetail