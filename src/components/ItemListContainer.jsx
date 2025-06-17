import { useEffect, useState } from "react"
import { getProducts } from "../mock/AsyncMock"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"


const ItemListContainer = (props) => {
    const[data, setData]= useState([])
    const {categoryId} = useParams()

    console.log(categoryId)
    useEffect(()=>{
        getProducts()
        .then((respuesta)=> {
            if(categoryId){
                //filtro
                setData(respuesta.filter((prod)=> prod.category === categoryId))
            }else{
                //no filtro
                setData(respuesta)
            }
        })
        .catch((error)=> console.log(error))
    },[categoryId])

return(
    <div>
        <h1 className="text-danger">{props.saludo}</h1>
        <ItemList data={data}/>
    </div>
)
}


export default ItemListContainer