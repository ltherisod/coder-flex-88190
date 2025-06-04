import React, {useEffect} from 'react'
import useFetch from '../hooks/useFetch'

const FetchCountry = () => {
const {data, loading, error}= useFetch('https://restcountries.com/v3.1/name/chile')
    // useEffect(()=>{
    //     fetch('https://restcountries.com/v3.1/name/chile')
    //     .then((response)=> response.json())
    //     .then((data)=> console.log(data))
    //     .catch((error)=> console.log(error))
    // },[])

    console.log(data, loading, error)
  return (
    <div>FetchCountry</div>
  )
}

export default FetchCountry