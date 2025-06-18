import React from 'react'
import { Spinner } from 'react-bootstrap'

const LoaderComponent = () => {
  return (
    <div style={{ width:'100%', height:'85vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Spinner animation='grow' variant='warning'/>
        {/* <p>Cargando...</p> */}
    </div>
  )
}

export default LoaderComponent