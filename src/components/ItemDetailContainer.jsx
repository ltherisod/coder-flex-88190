import React, { useEffect, useState } from 'react'
import { getOneProduct, getProducts } from '../mock/AsyncMock'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'

const ItemDetailContainer = () => {
    const [detail, setDetail] =useState({})
    const [cargando, setCargando]= useState(false)
    const {id} = useParams()
 
    useEffect(()=>{
      setCargando(true)
        getOneProduct(id)
        .then((res)=> setDetail(res))
        .catch((error)=> console.log(error))
        .finally(()=> setCargando(false))
    },[])

  return (
    <>
    {cargando ? <LoaderComponent/> : <ItemDetail detail={detail}/>}
    </>
  )
}

export default ItemDetailContainer