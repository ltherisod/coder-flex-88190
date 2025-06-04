import React, { useEffect, useState } from 'react'
import { getOneProduct, getProducts } from '../mock/AsyncMock'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [detail, setDetail] =useState({})

    //OPCION USANDO LA MISMA PROMESA QUE ITEMLISTCONTAINER
    // useEffect(()=>{
    //     getProducts()
    //     .then((res)=> setDetail(res.find((item)=> item.id === '02')))
    //     .catch((error)=> console.log(error))
    // },[])

    //OPCION 2 CREAR UNA FUNCION QUE ESPERE UN ID POR PARAMETRO Y RETORNE ESE PRODUCT

    useEffect(()=>{
        getOneProduct('03')
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