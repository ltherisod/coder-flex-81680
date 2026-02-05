import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../mock/asyncMock'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
 const[detail, setDetail]= useState({})
  // const param= useParams()
  // console.log(param)
   const{id}= useParams()
  // console.log(id)
    useEffect(()=>{
        getOneProduct(id)
        .then((res)=> setDetail(res))
        .catch((err)=> console.log(err))
    },[id])
  return (
    <div>
        <ItemDetail detail={detail}/>
    </div>
  )
}

export default ItemDetailContainer