import React, { useState } from 'react'

const Input = () => {
    const [name, setName]=useState('')

const inputHandler = (e)=>{
    console.log(e, 'evento')
    console.log(e.target, 'target')
    console.log(e.target.value, 'value')
    setName(e.target.value)
}
const noVocales = (event)=> {
    console.log(event.key)
    if('aeiou'.includes(event.key.toLowerCase())){
        event.preventDefault()
        console.log('es una vocal')
    }
}

  return (
    <div>
       <h1> Input</h1>
       <input className='form-control' name='nombre-completo' type='text' placeholder='Ingrese su nombre completo' onChange={inputHandler}/>
       <p>{name}</p>
       <h2>NO VOCALES</h2>
        <input className='form-control' name='no-vocales' type='text' placeholder='No se aceptan vocales' onKeyDown={noVocales}/>
    </div>
  )
}

export default Input