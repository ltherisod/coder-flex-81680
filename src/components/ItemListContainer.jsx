import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import Loader from './Loader'
import {  collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../service/firebase"

const ItemListContainer = ({mensaje})=>{
    const [data, setData]= useState([])
    const [loading, setLoading]= useState(false)
    const {type} = useParams()
   
 

    useEffect(()=>{
         setLoading(true)
         //conectarnos a nuestra coleccion
         const prodCollection = type ?  query(collection(db,"productos"), where("category", "==", type)): collection(db,"productos")
         //pedir los datos
         getDocs(prodCollection)
         .then((res)=>{
            //limpio el dato
            const list = res.docs.map((doc)=> {
                return {
                    id:doc.id,
                    ...doc.data()
                }
            })
            setData(list)
         })
         .catch((error)=> console.log(error))
         .finally(()=> setLoading(false))
    },[type])

  
    return(
        <>
        {
            loading 
            ? <Loader text={type ? 'Cargando Categoría...' : 'Cargando Productos...'}/>
            : <div>
            <h1>{mensaje}{type && <span style={{textTransform:'capitalize'}}>{type}</span>}</h1>
            
            <ItemList data={data}/>
        </div>
        }
        </>
    )
}
export default ItemListContainer