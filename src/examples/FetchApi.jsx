import React, { useEffect, useState } from 'react'
import FetchList from './FetchList'
import { useFetch } from '../hooks/useFetch'
import { useWindowSize } from '../hooks/useWindowSize'

const FetchApi = () => {
      const {data:personajes, loading, error}= useFetch('https://rickandmortyapi.com/api/character')
      const {width, height} = useWindowSize()
    // const [personajes, setPersonajes]= useState([])

    // useEffect(()=> {
    //     fetch('https://rickandmortyapi.com/api/character') //pido datos
    //     .then((res)=> res.json())//traducir la respuesta
    //     .then((data)=> setPersonajes(data.results))//guardamos en un estado para poder usarlo
    //     .catch((error)=> console.log(error))
    // },[])



  return (
    <div>
        <h1>FetchApi</h1>
        <p>Ancho:{width}px</p>
        <p>Alto:{height}px</p>
        {loading ? <p>Cagando..</p>: <FetchList personajes={personajes}/>}
        </div>
  )
}

export default FetchApi