import { useState, useEffect } from "react"
import { getProducts, productos } from "../mock/asyncMock"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import Loader from './Loader'
import { addDoc, collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../service/firebase"

const ItemListContainer = ({mensaje})=>{
    const [data, setData]= useState([])
    const [loading, setLoading]= useState(false)
    const {type} = useParams()
    console.log(type)
    // const {mensaje}=props

    // console.log(getProducts(), 'promesa')
    // getProducts().then((res)=> console.log(res, 'respuesta'))

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

    //PROMISE
    // useEffect(()=> {
    //     setLoading(true)
    //     getProducts()
    //     .then((res)=> {
    //         if(type){
    //             //filtrar
    //             setData(res.filter((prod)=> prod.category === type))
    //         }else{
    //             setData(res)
    //         }
    //     })
    //     .catch((error)=> console.error(error))
    //     .finally(()=> setLoading(false))
    // },[type])

    // console.log(data)
//SE BORRA Y SE USA UNA SOLA VEZ
    // const subirData = ()=> {
    //     console.log('Subiendo Data...')
    //     const prodASubir = collection(db, 'productos')
    //     productos.map((prod)=> addDoc(prodASubir, prod))
    // }
    return(
        <>
        {
            loading 
            ? <Loader text={type ? 'Cargando Categoría...' : 'Cargando Productos...'}/>
            : <div>
                {/* despues de borra! */}
           {/* <button onClick={subirData}>SUBIR Data</button> */}
            <h1>{mensaje}{type && <span style={{textTransform:'capitalize'}}>{type}</span>}</h1>
            
            <ItemList data={data}/>
        </div>
        }
        </>
    )
}
export default ItemListContainer