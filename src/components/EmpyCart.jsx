import React from 'react'
import { Link } from 'react-router-dom'

const EmpyCart = () => {
  return (
    <div>
        <h2>Tu carrito esta vacio! 😱</h2>
        <h3>Te invitamos a ver nuestros productos</h3>
        <Link className='btn btn-dark' to='/'>Ir a Home</Link>
    </div>
  )
}

export default EmpyCart