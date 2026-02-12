import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../mock/asyncMock'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import Loader from './Loader'

const ItemDetailContainer = () => {
 const[detail, setDetail]= useState({})
 const [cargando, setCargando]= useState(true)
  // const param= useParams()
  // console.log(param)
   const{id}= useParams()
  // console.log(id)
    useEffect(()=>{
        getOneProduct(id)
        .then((res)=> setDetail(res))
        .catch((err)=> console.log(err))
        .finally(()=> setCargando(false))
    },[id])
  return (
    <div>
       {cargando ? <Loader text={'Cargando Detalle...'}/> :<ItemDetail detail={detail}/>}
    </div>
  )
}

export default ItemDetailContainer