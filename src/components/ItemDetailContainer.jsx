import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../mock/asyncMock'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
 const[detail, setDetail]= useState({})

    useEffect(()=>{
        getOneProduct('02')
        .then((res)=> setDetail(res))
        .catch((err)=> console.log(err))
    },[])
  return (
    <div>
        <ItemDetail detail={detail}/>
    </div>
  )
}

export default ItemDetailContainer