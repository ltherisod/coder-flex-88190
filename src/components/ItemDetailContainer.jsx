import React, { useEffect, useState } from 'react'
import { getOneProduct, getProducts } from '../mock/AsyncMock'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [detail, setDetail] =useState({})
    const {id} = useParams()
    // const params = useParams()

 
    //OPCION USANDO LA MISMA PROMESA QUE ITEMLISTCONTAINER
    // useEffect(()=>{
    //     getProducts()
    //     .then((res)=> setDetail(res.find((item)=> item.id === id)))
    //     .catch((error)=> console.log(error))
    // },[])

    //OPCION 2 CREAR UNA FUNCION QUE ESPERE UN ID POR PARAMETRO Y RETORNE ESE PRODUCT

    useEffect(()=>{
        getOneProduct(id)
        .then((res)=> setDetail(res))
        .catch((error)=> console.log(error))
    },[])

  return (
    <>
    <ItemDetail detail={detail}/>
    </>
  )
}

export default ItemDetailContainer