import React from 'react'

const Item = ({prod}) => {
    const {name, price, img}= prod
  return (
 <div className="card" style={{width:'18rem'}}>
    <img src={img} className="card-img-top" alt={name}/>
    <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">${price},00</p>
        <a href="#" className="btn btn-primary">Ver más</a>
    </div>
</div>
  )
}

export default Item