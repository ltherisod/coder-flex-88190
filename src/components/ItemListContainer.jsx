import { useEffect, useState } from "react"
import { getProducts, productos } from "../mock/AsyncMock"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import LoaderComponent from "./LoaderComponent"
import { addDoc, collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../service/firebase"


const ItemListContainer = (props) => {
    const[data, setData]= useState([])
    const [loading, setLoading]= useState(false)
    const {categoryId} = useParams()
    //FIREBASE
    useEffect(()=>{
        setLoading(true)
        //conectarnos con nuestra collection
        const productsCollection = categoryId 
        ? query(collection(db,"products"), where("category", "==", categoryId))
        : collection(db,"products")
        //pedir los datos
        getDocs(productsCollection)
        .then((res)=>{
            //limpiar datos para el uso
            console.log(res.docs)
            const list = res.docs.map((doc)=>{
                return{
                    id:doc.id,
                    ...doc.data()
                }
            })
           setData(list)
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[categoryId])

    // console.log(categoryId)
    //PROMESA MOCK LOCAL
    // useEffect(()=>{
    //     setLoading(true)
    //     getProducts()
    //     .then((respuesta)=> {
    //         if(categoryId){
    //             //filtro
    //             setData(respuesta.filter((prod)=> prod.category === categoryId))
    //         }else{
    //             //no filtro
    //             setData(respuesta)
    //         }
    //     })
    //     .catch((error)=> console.log(error))
    //     .finally(()=> setLoading(false))
    // },[categoryId])
//UNA SOLA VEZ  
    // const subirData = () => {
    //         console.log('click!')

    //     const collectionAgregar = collection(db, "products")
    //     productos.map((prod) => addDoc(collectionAgregar, prod))
    // }

return(
    <>
    {/* <button onClick={subirData}>Subir prods</button> */}
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