import React, { useState } from 'react'

const Input = () => {
    const [name, setName] = useState('')
    const inputHandler = (e)=>{
        console.log(e.target.value, 'evento')
        setName(e.target.value)
    }

    const noVocales = (e)=>{
        console.log(e.key, 'evento')
        if('aeiou'.includes(e.key.toLowerCase())){
            e.preventDefault()
            // alert('No vocales!')
        }
    }

  return (
    <div>
        <input placeholder='Ingrese su nombre' type='text' name='nombre-completo' className='form-control' onChange={inputHandler}/>
        <p>{name}</p>
        <h1>No aceptamos vocales</h1>
        <input placeholder='No vocales' type='text' className='form-control' onKeyDown={noVocales}/>
    </div>
  )
}

export default Input