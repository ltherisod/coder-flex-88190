import React from 'react'
import {Link} from 'react-router-dom'
const Item = ({prod}) => {
    const {name, price, img, id}= prod
  return (
 <div className="card" style={{width:'18rem'}}>
    <img src={img} className="card-img-top" alt={name}/>
    <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">${price},00</p>
        {/* <Link to={'/item/'+id} className="btn btn-primary">Ver más</Link> */}
        <Link to={`/item/${id}`} className="btn btn-primary">Ver más</Link>
    </div>
</div>
  )
}

export default Item