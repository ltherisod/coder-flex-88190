import React, {useEffect, useState} from 'react'
import useFetch from '../hooks/useFetch'

const FetchApi = () => {
    const {data, loading, error} =  useFetch("https://rickandmortyapi.com/api/character")
    // const [data, setData] = useState([])

    // useEffect(()=>{
    //     //PIDO DATOS
    //     fetch("https://rickandmortyapi.com/api/character")
    //     .then((respuesta)=> respuesta.json())//traducirlo a json
    //     .then((res)=> setData(res.results))//guardamos la data
    //     .catch((error)=>console.log(error))//atrapamos el error
    // },[])

console.log(data, 'data')
  return (
    <div>
        <h2>Personajes</h2>
        {/* {data.map((personaje)=> <p key={personaje.id}>{personaje.name}</p>)} */}
        {data && data.results.map((pers)=> <div key={pers.id} className="card" style={{width:'18rem'}}>
             <img src={pers.image} className="card-img-top" alt={pers.name}/>
                <div className="card-body">
                    <h5 className="card-title">{pers.name}</h5>
                    <p className="card-text">{pers.status}</p>
                   
                </div>
        </div>)}
    </div>
  )
}

export default FetchApi