import { useEffect, useState } from "react"
import { getProducts } from "../mock/AsyncMock"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import LoaderComponent from "./LoaderComponent"


const ItemListContainer = (props) => {
    const[data, setData]= useState([])
    const [loading, setLoading]= useState(false)
    const {categoryId} = useParams()

    console.log(categoryId)
    useEffect(()=>{
        setLoading(true)
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
        .finally(()=> setLoading(false))
    },[categoryId])

return(
    <>
    {
        loading 
        ? <LoaderComponent/> 
        :<div>
        <h1 className="text-danger">{props.saludo}</h1>
        <ItemList data={data}/>
    </div>
    }
    </>
)
}


export default ItemListContainer