import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../mock/asyncMock'
import ItemDetail from './ItemDetail'
import { Link, useParams } from 'react-router-dom'
import Loader from './Loader'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'

const ItemDetailContainer = () => {
 const[detail, setDetail]= useState({})
 const [cargando, setCargando]= useState(true)
 const [invalid, setInvalid]= useState(null)
  // const param= useParams()
  // console.log(param)
   const{id}= useParams()
  // console.log(id)
  useEffect(()=>{
        const docRef= doc(db, "productos", id)
        //traer el doc
        getDoc(docRef)
        .then((res)=> {
          if(res.data()){
            setDetail({id:res.id, ...res.data()})
          }else{
            setInvalid(true)
          }
        })
        .catch((err)=> console.log(err))
        .finally(()=> setCargando(false))
    },[id])

  //PROMESA
    // useEffect(()=>{
    //     getOneProduct(id)
    //     .then((res)=> setDetail(res))
    //     .catch((err)=> console.log(err))
    //     .finally(()=> setCargando(false))
    // },[id])
  if(invalid){
    return(
      <div>
        <h2>El prod no existe! 😱</h2>
        <Link className='btn btn-dark' to='/'>Volver a home</Link>
      </div>
    )
  }

  return (
    <div>
       {cargando ? <Loader text={'Cargando Detalle...'}/> :<ItemDetail detail={detail}/>}
    </div>
  )
}

export default ItemDetailContainer